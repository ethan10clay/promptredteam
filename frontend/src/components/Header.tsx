import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex justify-between items-center"
      style={{ background: 'linear-gradient(to bottom, #0a0a0b 0%, transparent 100%)' }}
    >
      {/* Logo */}
      <Link 
        to="/" 
        className="font-bold text-base sm:text-[1.1rem] tracking-tight flex items-center gap-2 text-[#fafafa]"
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="w-2 h-2 bg-[#ef4444] rounded-sm" />
        PromptRedTeam
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 lg:gap-10 items-center">
        <a 
          href="https://github.com/ethan10clay/promptredteam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Full Project GitHub
        </a>
        <a 
          href="https://github.com/ethan10clay/promptredteam-api" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          API GitHub
        </a>
        <Link 
          to="/learn" 
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Learn
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#a1a1aa] hover:text-[#fafafa] transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed left-0 right-0 top-[64px] md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ 
          background: 'rgba(10, 10, 11, 0.98)',
          borderBottom: '1px solid #27272a'
        }}
      >
        <nav className="flex flex-col gap-6 p-6">
          <a 
            href="https://github.com/ethan10clay/promptredteam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a1a1aa] text-lg hover:text-[#fafafa] transition-colors border-b border-[#27272a] pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Full Project GitHub
          </a>
          <a 
            href="https://github.com/ethan10clay/promptredteam-api" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a1a1aa] text-lg hover:text-[#fafafa] transition-colors border-b border-[#27272a] pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            API GitHub
          </a>
          <Link 
            to="/learn" 
            className="text-[#a1a1aa] text-lg hover:text-[#fafafa] transition-colors border-b border-[#27272a] pb-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Learn
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;