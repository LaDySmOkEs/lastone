// components/Layout.tsx
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  currentPageName: string;
};

export default function Layout({ children, currentPageName }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold">{currentPageName}</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Due Process AI
      </footer>
    </div>
  );
}
