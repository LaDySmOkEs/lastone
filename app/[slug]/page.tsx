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

export default function Layout({ children, currentPageName }: { children: React.ReactNode; currentPageName: string }) {
  return (
    <div>
      <header>{currentPageName}</header>
      <main>{children}</main>
    </div>
  );
}

