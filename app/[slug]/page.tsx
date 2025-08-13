// app/[slug]/page.tsx

type Props = {
  params: {
    slug: string;
  };
};

const TitleMap: Record<string, string> = {
  home: "Home",
  about: "About Us",
  contact: "Contact",
};

export default function Page({ params }: Props) {
  const name = TitleMap[params.slug] ?? params.slug;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{name}</h2>
        <p className="text-gray-600">
          This is a placeholder page for <span className="font-medium">{name}</span>.
        </p>
      </div>
    </div>
  );
}
