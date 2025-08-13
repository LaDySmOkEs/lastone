// app/[slug]/page.tsx
import React from "react";
import Layout from "@/components/Layout"; // Make sure this path is correct

type Props = {
  params: {
    slug: string;
  };
};

const TitleMap: Record<string, string> = {
  example: "Example Page",
  // Add your other slugs here
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
