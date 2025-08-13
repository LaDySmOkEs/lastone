import { ReactNode } from "react";

interface LayoutProps {
  currentPageName: string;
  children: ReactNode; // explicitly type children
}

export default function Layout({ currentPageName, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4 shadow">
        <h1 className="text-xl font-bold">{currentPageName}</h1>
      </header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        © 2025 Due Process AI
      </footer>
    </div>
  );
}
