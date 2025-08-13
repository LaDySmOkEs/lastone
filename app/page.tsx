import Layout from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout currentPageName="Dashboard">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Due Process AI</h1>
        <p className="mt-2 text-slate-600">
          Your constitutional rights platform.
        </p>
      </div>
    </Layout>
  );
}
