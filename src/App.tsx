import { Navbar, Hero, Features, MAGSSection, AISection, ChatWidget, Footer, InventorySection } from "./components/Site";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-lime selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <InventorySection />
        <Features />
        <MAGSSection />
        <AISection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
