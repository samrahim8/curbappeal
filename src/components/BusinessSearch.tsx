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
    <div ref={containerRef} className="relative">
      {/* Search input + button row */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => predictions.length > 0 && setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search your business name..."
            className="w-full h-14 px-5 text-base bg-white border-2 border-border rounded-lg
                       text-foreground placeholder:text-muted/60
                       focus:outline-none focus:border-accent transition-colors"
          />
          {isLoading && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Pool blue button - THE bold move */}
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className="h-14 px-6 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors whitespace-nowrap"
        >
          Get Score
        </button>
      </div>

      {/* Dropdown */}
      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-border rounded-lg shadow-lg overflow-hidden">
          <ul>
            {predictions.map((prediction, index) => (
              <li key={prediction.place_id}>
                <button
                  onClick={() => handleSelect(prediction)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-5 py-4 text-left transition-colors ${
                    selectedIndex === index ? "bg-accent/5" : "hover:bg-accent/5"
                  }`}
                >
                  <div className="font-medium text-foreground">
                    {prediction.structured_formatting.main_text}
                  </div>
                  <div className="text-sm text-muted">
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
