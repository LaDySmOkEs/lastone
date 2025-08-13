import React from "react";

export const Badge = ({ className = "", children }: { className?: string; children: React.ReactNode }) => (
  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${className}`}>
    {children}
  </span>
);
