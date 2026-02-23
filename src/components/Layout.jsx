import Navbar from "./Navbar";

function Layout({ children, userName, showGreeting = false }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* Top Navigation */}
      <Navbar userName={userName} showGreeting={showGreeting} />

      <main className="relative">
        <div className="mx-auto">
          <div className="">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
