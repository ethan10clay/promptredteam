import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12 border-t border-[#27272a] flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left">
        <Link 
          to="/docs" 
          className="text-[#a1a1aa] text-xs sm:text-sm hidden lg:blockhover:text-[#fafafa] transition-colors"
        >
          Documentation
        </Link>
        <a 
          href="https://github.com/ethan10clay/promptredteam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-xs sm:text-sm hover:text-[#fafafa] transition-colors"
        >
          Full Project GitHub
        </a>
        <a 
          href="https://github.com/ethan10clay/promptredteam-api"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-xs sm:text-sm hover:text-[#fafafa] transition-colors"
        >
          API GitHub
        </a>
        <Link 
          to="/learn" 
          className="text-[#a1a1aa] text-xs sm:text-sm hover:text-[#fafafa] transition-colors"
        >
          Learn About Prompt Injection
        </Link>
      </div>
      <div className="text-[0.75rem] sm:text-[0.8125rem] text-[#a1a1aa]">
        Open source · MIT License
      </div>
    </footer>
  );
};

export default Footer;