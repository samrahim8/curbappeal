"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

declare global {
  interface Window {
    google: typeof google;
    initGooglePlaces: () => void;
  }
}

let googleLoaded = false;
let googleLoadPromise: Promise<void> | null = null;

function loadGooglePlaces(): Promise<void> {
  if (googleLoaded && window.google?.maps?.places) {
    return Promise.resolve();
  }

  if (googleLoadPromise) {
    return googleLoadPromise;
  }

  googleLoadPromise = new Promise((resolve) => {
    window.initGooglePlaces = () => {
      googleLoaded = true;
      resolve();
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places&callback=initGooglePlaces`;
    script.async = true;
    document.head.appendChild(script);
  });

  return googleLoadPromise;
}

export function BusinessSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null);
  const sessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null);

  // Load Google Places API on mount
  useEffect(() => {
    loadGooglePlaces().then(() => {
      autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
      sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
    });
  }, []);

  const fetchPredictions = useCallback((input: string) => {
    if (!input.trim()) {
      setPredictions([]);
      setShowDropdown(false);
      return;
    }

    if (!autocompleteServiceRef.current) {
      // Fallback to API route if Google hasn't loaded yet
      setIsLoading(true);
      fetch(`/api/places/autocomplete?input=${encodeURIComponent(input)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.predictions) {
            setPredictions(data.predictions);
            setShowDropdown(true);
          }
        })
        .finally(() => setIsLoading(false));
      return;
    }

    setIsLoading(true);
    autocompleteServiceRef.current.getPlacePredictions(
      {
        input,
        types: ["establishment"],
        sessionToken: sessionTokenRef.current!,
      },
      (results, status) => {
        setIsLoading(false);
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          setPredictions(
            results.map((r) => ({
              place_id: r.place_id,
              description: r.description,
              structured_formatting: {
                main_text: r.structured_formatting.main_text,
                secondary_text: r.structured_formatting.secondary_text,
              },
            }))
          );
          setShowDropdown(true);
        } else {
          setPredictions([]);
        }
      }
    );
  }, []);

  // Fetch on every keystroke - instant
  useEffect(() => {
    fetchPredictions(query);
  }, [query, fetchPredictions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (prediction: PlacePrediction) => {
    setQuery(prediction.structured_formatting.main_text);
    setShowDropdown(false);
    // Reset session token for next search session
    if (window.google?.maps?.places) {
      sessionTokenRef.current = new window.google.maps.places.AutocompleteSessionToken();
    }
    router.push(`/audit/${prediction.place_id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || predictions.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < predictions.length - 1 ? prev + 1 : prev));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) handleSelect(predictions[selectedIndex]);
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Input with Glass Effect */}
      <div className="relative">
        <div className="glass-button rounded-2xl p-1">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => predictions.length > 0 && setShowDropdown(true)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your business name..."
                className="w-full h-12 pl-4 pr-12 text-base bg-transparent
                         text-text placeholder:text-text-muted
                         focus:outline-none rounded-xl"
              />
              {isLoading && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => inputRef.current?.focus()}
              className="btn-primary h-10 px-5 rounded-xl text-sm font-medium flex items-center gap-2 shrink-0"
            >
              <span className="hidden sm:inline">Get Score</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown */}
      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-surface rounded-2xl shadow-card overflow-hidden border border-border-light">
          <ul className="max-h-64 overflow-y-auto">
            {predictions.map((prediction, index) => (
              <li key={prediction.place_id}>
                <button
                  onClick={() => handleSelect(prediction)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    selectedIndex === index ? "bg-background" : "hover:bg-background"
                  }`}
                >
                  <div className="font-medium text-text text-sm truncate">
                    {prediction.structured_formatting.main_text}
                  </div>
                  <div className="text-sm text-text-muted truncate">
                    {prediction.structured_formatting.secondary_text}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
