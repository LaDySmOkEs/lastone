// app/[slug]/page.tsx
import Layout from "@/components/Layout";

interface Props {
  params: { slug: string };
}

const TitleMap: Record<string, string> = {
  example: "Example Page",
  // add more mappings
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
