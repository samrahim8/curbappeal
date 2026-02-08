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

interface BusinessSearchProps {
  size?: "large" | "default";
  autoFocus?: boolean;
  placeholder?: string;
}

export function BusinessSearch({
  size = "default",
  autoFocus = false,
  placeholder = "Type your business name...",
}: BusinessSearchProps) {
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
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      fetchPredictions(query);
    }, 300);
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
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
        if (selectedIndex >= 0 && selectedIndex < predictions.length) {
          handleSelect(predictions[selectedIndex]);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => predictions.length > 0 && setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full h-12 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />

      {isLoading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}

      {showDropdown && predictions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1">
            {predictions.map((prediction, index) => (
              <li key={prediction.place_id}>
                <button
                  onClick={() => handleSelect(prediction)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 text-left ${
                    selectedIndex === index ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="font-medium">{prediction.structured_formatting.main_text}</div>
                  <div className="text-sm text-gray-500">{prediction.structured_formatting.secondary_text}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
