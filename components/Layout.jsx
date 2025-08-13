export default function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="py-4 border-b mb-6">
        <h1 className="text-3xl font-bold">Due Process AI</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
