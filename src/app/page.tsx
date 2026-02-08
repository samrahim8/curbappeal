"use client";

import Link from "next/link";
import { BusinessSearch } from "@/components/BusinessSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="font-bold text-xl">Curb Appeal</div>
        <Link href="/login" className="text-gray-600 text-sm">Log in</Link>
      </header>

      {/* Hero */}
      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">
          Is Google helping or hurting your business?
        </h1>
        <p className="text-gray-600 mb-8">
          Free Google Business Profile audit. 30 seconds.
        </p>
        <BusinessSearch size="default" placeholder="Search your business name..." />
      </main>
    </div>
  );
}
