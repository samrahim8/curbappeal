export default function AuditLoading() {
  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Header skeleton */}
      <header className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-surface-secondary rounded-lg skeleton" />
          <div className="h-5 w-24 bg-surface-secondary rounded skeleton" />
        </div>
        <div className="h-9 w-20 bg-surface-secondary rounded-xl skeleton" />
      </header>

      <main className="max-w-4xl mx-auto px-5 py-8 md:py-12">
        {/* Score section skeleton */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-48 h-48 rounded-full bg-surface-secondary skeleton" />
          </div>

          <div className="h-8 w-64 mx-auto bg-surface-secondary rounded skeleton mb-3" />
          <div className="h-5 w-48 mx-auto bg-surface-secondary rounded skeleton mb-4" />

          <div className="flex items-center justify-center gap-4">
            <div className="h-5 w-24 bg-surface-secondary rounded skeleton" />
            <div className="h-5 w-20 bg-surface-secondary rounded skeleton" />
          </div>

          <div className="h-6 w-96 max-w-full mx-auto bg-surface-secondary rounded skeleton mt-6" />
        </div>

        {/* Action items skeleton */}
        <div className="mb-12">
          <div className="h-7 w-32 bg-surface-secondary rounded skeleton mb-6" />

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-surface-secondary rounded-xl skeleton" />
                  <div className="flex-1">
                    <div className="h-5 w-20 bg-surface-secondary rounded skeleton mb-2" />
                    <div className="h-5 w-48 bg-surface-secondary rounded skeleton mb-2" />
                    <div className="h-4 w-full bg-surface-secondary rounded skeleton" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown skeleton */}
        <div className="mb-12">
          <div className="h-7 w-40 bg-surface-secondary rounded skeleton mb-6" />

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-secondary rounded-xl skeleton" />
                    <div>
                      <div className="h-5 w-24 bg-surface-secondary rounded skeleton mb-1" />
                      <div className="h-4 w-16 bg-surface-secondary rounded skeleton" />
                    </div>
                  </div>
                  <div className="h-8 w-12 bg-surface-secondary rounded skeleton" />
                </div>
                <div className="h-2 bg-surface-secondary rounded-full mb-3" />
                <div className="h-4 w-full bg-surface-secondary rounded skeleton" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
