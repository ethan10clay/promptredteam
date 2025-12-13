import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-12 py-12 border-t border-[#27272a] flex justify-between items-center">
      <div className="flex gap-8">
        <Link 
          to="/docs" 
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Documentation
        </Link>
        <a 
          href="https://github.com/ethan10clay/promptredteam-api"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          GitHub
        </a>
        <Link 
          to="/learn" 
          className="text-[#a1a1aa] text-sm hover:text-[#fafafa] transition-colors"
        >
          Learn About Prompt Injection
        </Link>
      </div>
      <div className="text-[0.8125rem] text-[#a1a1aa]">
        Open source · MIT License
      </div>
    </footer>
  );
};

export default Footer;