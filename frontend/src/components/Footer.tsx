import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-12 py-12 border-t border-[#27272a] flex justify-between items-center">
      <div className="flex gap-8">
        <Link 
          to="/docs" 
          className="text-[#52525b] text-sm hover:text-[#fafafa] transition-colors"
        >
          Documentation
        </Link>
        <a 
          href="https://github.com/ethan10clay/promptredteam-api"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52525b] text-sm hover:text-[#fafafa] transition-colors"
        >
          GitHub
        </a>
        <Link 
          to="/learn" 
          className="text-[#52525b] text-sm hover:text-[#fafafa] transition-colors"
        >
          Learn about attacks
        </Link>
      </div>
      <div className="text-[0.8125rem] text-[#52525b]">
        Open source · MIT License
      </div>
    </footer>
  );
};

export default Footer;