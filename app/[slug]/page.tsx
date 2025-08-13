import Layout from "@/components/Layout";

type Props = { params: { slug: string } };

const TitleMap: Record<string, string> = {
  "report-incident": "Report New Incident",
  "self-litigant-center": "AI Case Strategist",
  "document-analyzer": "AI Document Analyzer",
  "legal-draftsman": "Document Generator",
  "courtroom-simulator": "Courtroom Simulator",
  "my-incidents": "My Cases & Incidents",
  "class-action-registry": "National Due Process Registry",
  "digital-investigator": "Digital Investigator",
  "anti-corruption-center": "Anti-Corruption Center",
  "complaint-tracker": "Complaint Tracker",
  "know-your-rights": "Know Your Rights",
  "homeschool-navigator": "Homeschool Legal Center",
  "curriculum-k5": "Curriculum: K-5",
  "curriculum-6-8": "Curriculum: 6-8",
  "curriculum-9-12": "Curriculum: 9-12",
  "legal-resources": "Legal Resources",
  "court-access-center": "Court Access Center",
  "billing": "Billing & Subscription",
  "network-diagnostic": "Network Diagnostic"
};

export default function Page({ params }: Props) {
  const name = TitleMap[params.slug] ?? params.slug;
  return (
    <Layout currentPageName={name}>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-slate-600">This is a placeholder for {name}.</p>
      </div>
    </Layout>
  );
}
