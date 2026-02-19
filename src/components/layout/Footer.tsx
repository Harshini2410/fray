"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-medium text-foreground">Fraylon Technologies</p>
        <p className="text-xs sm:text-sm" suppressHydrationWarning>
          © {year} Fraylon Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
