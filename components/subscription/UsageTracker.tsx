"use client";
export default function UsageTracker() {
  return (
    <div className="w-full rounded-lg border border-slate-200 p-3">
      <div className="text-xs text-slate-500">Usage</div>
      <div className="mt-1 text-sm text-slate-700">You’ve used 0 of 100 credits.</div>
    </div>
  );
}
