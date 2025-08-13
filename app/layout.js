export const metadata = {
  title: "Due Process AI",
  description: "AI-powered legal workflow assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-4">
        <header className="py-4 border-b mb-6">
          <h1 className="text-3xl font-bold">Due Process AI</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
