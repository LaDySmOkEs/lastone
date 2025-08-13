export function createPageUrl(name: string) {
  const map: Record<string, string> = {
    Dashboard: "/",
    ReportIncident: "/report-incident",
    SelfLitigantCenter: "/self-litigant-center",
    DocumentAnalyzer: "/document-analyzer",
    LegalDraftsman: "/legal-draftsman",
    CourtroomSimulator: "/courtroom-simulator",
    MyIncidents: "/my-incidents",
    ClassActionRegistry: "/class-action-registry",
    DigitalInvestigator: "/digital-investigator",
    AntiCorruptionCenter: "/anti-corruption-center",
    ComplaintTracker: "/complaint-tracker",
    KnowYourRights: "/know-your-rights",
    HomeschoolNavigator: "/homeschool-navigator",
    HomeschoolCurriculumK5: "/curriculum-k5",
    HomeschoolCurriculum68: "/curriculum-6-8",
    HomeschoolCurriculum912: "/curriculum-9-12",
    LegalResources: "/legal-resources",
    CourtAccessCenter: "/court-access-center",
    Billing: "/billing",
    NetworkDiagnostic: "/network-diagnostic"
  };
  return map[name] ?? "/";
}
