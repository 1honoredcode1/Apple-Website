import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md z-50">
      <nav className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto text-white">
        <a href="">
          <img src="/logo.svg" alt="Apple logo" className="w-6 h-6" />
        </a>

        <ul className="flex gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button aria-label="Search">
            <img src="/search.svg" alt="Search icon" className="w-5 h-5" />
          </button>
          <button aria-label="Cart">
            <img src="/cart.svg" alt="Cart icon" className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
