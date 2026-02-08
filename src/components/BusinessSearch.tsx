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

export function BusinessSearch() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState<PlacePrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPredictions = useCallback(async (input: string) => {
    if (!input.trim() || input.length < 2) {
      setPredictions([]);
      setShowDropdown(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/places/autocomplete?input=${encodeURIComponent(input)}`
      );
      const data = await response.json();
      if (data.predictions) {
        setPredictions(data.predictions);
        setShowDropdown(true);
      }
    } catch (error) {
      console.error("Failed to fetch predictions:", error);
      setPredictions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchPredictions(query), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
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
      {/* Input + Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Input */}
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => predictions.length > 0 && setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Enter your business name..."
            className="w-full h-12 px-4 text-base bg-cream border border-border rounded-md
                       text-walnut placeholder:text-walnut-light font-body
                       focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest/20
                       transition-colors"
          />
          {isLoading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-forest/30 border-t-forest rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className="h-12 px-6 bg-forest hover:bg-forest-light active:bg-forest-light
                     text-white font-medium rounded-md transition-all
                     hover:-translate-y-px
                     flex items-center justify-center gap-2"
        >
          <span>Get Score</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-cream border border-border rounded-md shadow-lg overflow-hidden">
          <ul className="max-h-64 overflow-y-auto">
            {predictions.map((prediction, index) => (
              <li key={prediction.place_id}>
                <button
                  onClick={() => handleSelect(prediction)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 text-left transition-colors border-b border-border/50 last:border-0 ${
                    selectedIndex === index ? "bg-ivory" : "hover:bg-ivory"
                  }`}
                >
                  <div className="font-medium text-walnut text-sm truncate">
                    {prediction.structured_formatting.main_text}
                  </div>
                  <div className="text-sm text-walnut-light truncate">
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
