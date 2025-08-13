// components/Layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
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
