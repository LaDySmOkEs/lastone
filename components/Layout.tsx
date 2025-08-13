// components/Layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;        // <- explicitly include children
  currentPageName: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  return (
    <div>
      <header>{currentPageName}</header>
      <main>{children}</main>
    </div>
  );
}
