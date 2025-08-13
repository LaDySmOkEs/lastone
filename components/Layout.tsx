// components/Layout.tsx
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  currentPageName: string;
};

export default function Layout({ children, currentPageName }: LayoutProps) {
  return (
    <div>
      <header className="p-4 border-b">{currentPageName}</header>
      <main>{children}</main>
    </div>
  );
}
