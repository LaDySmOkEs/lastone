type Props = {
  params: {
    slug: string;
  };
};

const TitleMap: Record<string, string> = {
  // Add mappings if needed
};

export default function Page({ params }: Props) {
  const name = TitleMap[params.slug] ?? params.slug;
  return (
    <>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-slate-600">This is a placeholder for {name}.</p>
      </div>
    </>
  );
}
