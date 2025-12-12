import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import AttackTypes from "@/components/AttackTypes";
import CodeExample from "@/components/CodeExample";
import Footer from "@/components/Footer";
import ScrollingBackground from '@/components/ScrollingBackground';


const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="grid-overlay" />
      <ScrollingBackground />
      <Header />
      <Hero />
      <AttackTypes />
      <Demo />
      <CodeExample />
      <Footer />
    </div>
  );
};

export default Index;