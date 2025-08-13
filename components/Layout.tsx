"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPageUrl } from "@/utils";
import {
  Shield, BookOpen, FileText, BarChart3, AlertTriangle, Gavel, Users, Phone,
  ScanText, Scale, BrainCircuit, FileSignature, Mic, Search, Menu, X,
  ChevronDown, ChevronRight, FolderOpen, Home, Plus, Eye, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UsageTracker from "@/components/subscription/UsageTracker";

const navigationSections = {
  main: {
    title: "Main",
    icon: Home,
    color: "text-amber-600",
    expanded: true,
    items: [
      { title: "Dashboard", url: createPageUrl("Dashboard"), icon: BarChart3, color: "text-amber-600", description: "Your case overview and activity" },
      { title: "Report New Incident", url: createPageUrl("ReportIncident"), icon: Plus, color: "text-red-600", description: "Document a police interaction", highlight: true }
    ]
  },
  defenseKit: {
    title: "Civil Liberties Defense Kit",
    icon: Shield,
    color: "text-blue-600",
    expanded: true,
    items: [
      { title: "AI Case Strategist", url: createPageUrl("SelfLitigantCenter"), icon: BrainCircuit, color: "text-purple-600", badge: "AI", description: "AI-powered legal strategy" },
      { title: "AI Document Analyzer", url: createPageUrl("DocumentAnalyzer"), icon: ScanText, color: "text-teal-600", badge: "AI", description: "Analyze documents for violations" },
      { title: "Document Generator", url: createPageUrl("LegalDraftsman"), icon: FileSignature, color: "text-blue-600", badge: "AI", description: "Generate legal documents" },
      { title: "Courtroom Simulator", url: createPageUrl("CourtroomSimulator"), icon: Mic, color: "text-purple-600", badge: "AI", description: "Practice court presentations" },
      { title: "My Cases & Incidents", url: createPageUrl("MyIncidents"), icon: FolderOpen, color: "text-slate-700", description: "View all your documented cases" }
    ]
  },
  watchdog: {
    title: "Community Watchdog Tools",
    icon: Users,
    color: "text-red-700",
    items: [
      { title: "National Due Process Registry", url: createPageUrl("ClassActionRegistry"), icon: Users, color: "text-red-600", description: "Join collective legal action" },
      { title: "Digital Investigator", url: createPageUrl("DigitalInvestigator"), icon: Search, color: "text-slate-700", description: "Investigation and research tools" },
      { title: "Anti-Corruption Center", url: createPageUrl("AntiCorruptionCenter"), icon: AlertTriangle, color: "text-red-600", description: "Systematic corruption documentation" },
      { title: "Complaint Tracker", url: createPageUrl("ComplaintTracker"), icon: Eye, color: "text-orange-600", description: "Track your filed complaints" }
    ]
  },
  navigator: {
    title: "Legal Rights Navigator",
    icon: BookOpen,
    color: "text-green-600",
    items: [
      { title: "Know Your Rights", url: createPageUrl("KnowYourRights"), icon: BookOpen, color: "text-green-600", description: "Learn constitutional protections" },
      { title: "Homeschool Legal Center", url: createPageUrl("HomeschoolNavigator"), icon: Home, color: "text-teal-600", description: "State-specific homeschooling laws" },
      { title: "Curriculum: K-5", url: createPageUrl("HomeschoolCurriculumK5"), icon: BookOpen, color: "text-green-700", description: "Detailed curriculum guides for K-5 grades" },
      { title: "Curriculum: 6-8", url: createPageUrl("HomeschoolCurriculum68"), icon: BookOpen, color: "text-green-700", description: "Detailed curriculum guides for 6-8 grades" },
      { title: "Curriculum: 9-12", url: createPageUrl("HomeschoolCurriculum912"), icon: BookOpen, color: "text-green-700", description: "Detailed curriculum guides for 9-12 grades" },
      { title: "Legal Resources", url: createPageUrl("LegalResources"), icon: FileText, color: "text-green-700", description: "Templates and legal guides" },
      { title: "Court Access Center", url: createPageUrl("CourtAccessCenter"), icon: Gavel, color: "text-slate-600", description: "Challenge filing rejections" }
    ]
  }
} as const;

export default function Layout({ children, currentPageName }: { children: React.ReactNode; currentPageName?: string }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial = { main: true, defenseKit: true, watchdog: false, navigator: false } as Record<string, boolean>;
    for (const key in navigationSections) {
      const match = navigationSections[key as keyof typeof navigationSections].items.some(i => pathname === i.url);
      if (match) initial[key] = true;
    }
    return initial;
  });

  useEffect(() => {
    setExpandedSections(prev => {
      let changed = false;
      const next = { ...prev };
      for (const key in navigationSections) {
        const match = navigationSections[key as keyof typeof navigationSections].items.some(i => pathname === i.url);
        if (match && !prev[key]) {
          next[key] = true;
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [pathname]);

  const toggleSection = (key: string) => setExpandedSections(s => ({ ...s, [key]: !s[key] }));

  const NavSection = ({ sectionKey, section }: { sectionKey: string; section: any }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`w-full flex items-center justify-between text-left text-xs font-semibold ${section.color} uppercase tracking-wider px-2 py-3 cursor-pointer hover:bg-slate-50 rounded-lg transition-colors`}
      >
        <div className="flex items-center gap-2">
          <section.icon className="w-4 h-4" />
          <span>{section.title}</span>
        </div>
        {expandedSections[sectionKey] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>

      {expandedSections[sectionKey] && (
        <div className="space-y-1 mt-2">
          {section.items.map((item: any) => {
            const active = pathname === item.url || (pathname === "/" && item.title === "Dashboard");
            return (
              <Link
                key={item.title}
                href={item.url}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-all duration-200 group ${
                  active ? "bg-amber-100 text-amber-900 shadow-sm border border-amber-200" : "text-slate-600 hover:text-slate-900"
                } ${item.highlight ? "ring-2 ring-red-200 bg-red-50" : ""}`}
              >
                <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.title}</span>
                    {item.badge && <Badge className="text-xs bg-purple-100 text-purple-700 border border-purple-200">{item.badge}</Badge>}
                    {item.highlight && <Badge className="text-xs bg-red-600 text-white">Start Here</Badge>}
                  </div>
                  {item.description && <span className="text-xs text-slate-500 block mt-1">{item.description}</span>}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex w-full bg-slate-50 relative">
      <style jsx>{`
        .brand-background {
          background-image: url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/82b755008_image.png');
          background-size: 400px;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          opacity: 0.03;
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
        }
      `}</style>

      <div className="brand-background" />

      {isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Sidebar Header */}
        <div className="border-b border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/82b755008_image.png"
                  alt="Due Process AI"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-slate-900 text-lg">Due Process AI</h2>
                <p className="text-xs text-amber-600 font-medium">Your Constitutional Rights Platform</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(false)} className="md:hidden">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6"><UsageTracker /></div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-amber-900 text-sm mb-2">New User? Start Here:</h3>
            <ol className="text-xs text-amber-800 space-y-1 list-decimal list-inside">
              <li>Report any incident you've experienced</li>
              <li>Learn your constitutional rights</li>
              <li>Analyze evidence with AI tools</li>
              <li>Generate legal documents as needed</li>
            </ol>
          </div>

          <div className="space-y-2">
            {Object.entries(navigationSections).map(([key, section]) => (
              <NavSection key={key} sectionKey={key} section={section} />
            ))}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-200 p-4 bg-white">
          <Link href={createPageUrl("Billing")} className="block mb-4">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4" />
              Billing & Subscription
            </Button>
          </Link>

          <Link href={createPageUrl("NetworkDiagnostic")} className="block mb-4">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Network Diagnostic
            </Button>
          </Link>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-red-600" />
              <span className="font-semibold text-red-900 text-sm">Emergency</span>
            </div>
            <div className="text-xs text-red-700 space-y-1">
              <div>Emergency: 911</div>
              <div>ACLU: 212-549-2500</div>
              <div>Legal Aid: 211</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-amber-900 text-white rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4" />
              <span className="font-semibold text-sm">Due Process Protection</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              "No person shall be deprived of life, liberty, or property, without due process of law." - 14th Amendment
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative z-10">
        <header className="bg-white border-b border-slate-200 px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(true)} className="md:hidden hover:bg-slate-100 p-2 rounded-lg">
                <Menu className="w-6 h-6 text-slate-800" />
              </Button>

              <div className="flex items-center gap-2">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/82b755008_image.png"
                  alt="Due Process AI"
                  className="w-6 h-6 object-contain"
                />
                <h1 className="text-xl font-bold text-slate-900">Due Process AI</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href={createPageUrl("ReportIncident")} className="hidden sm:flex">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Report Incident
                </Button>
              </Link>
              <Link href={createPageUrl("ReportIncident")} className="sm:hidden">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  <Plus className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-2 text-sm text-slate-600 hidden md:block">
            <span>Due Process AI</span>
            <span className="mx-2">›</span>
            <span className="text-slate-900 font-medium">{currentPageName || "Dashboard"}</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}
