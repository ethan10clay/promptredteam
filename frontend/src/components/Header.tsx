import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center"
      style={{ background: 'linear-gradient(to bottom, #0a0a0b 0%, transparent 100%)' }}
    >
      <Link to="/" className="font-bold text-[1.1rem] tracking-tight flex items-center gap-2 text-[#fafafa]">
        <div className="w-2 h-2 bg-[#ef4444] rounded-sm" />
        PromptRedTeam
      </Link>
      <nav className="flex gap-10 items-center">
        <Link 
          to="/docs" 
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Docs
        </Link>
        <Link 
          to="/learn" 
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Learn
        </Link>
        <a 
          href="https://github.com/ethan10clay/promptredteam-api" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Header;