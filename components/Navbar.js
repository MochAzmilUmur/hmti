import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Navbar = ({ currentPath }) => {
  const router = useRouter();
  const activePath = currentPath || router.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
            <img 
              src="/assets/HMTI.webp" 
              alt="Logo HMTI" 
              className="h-12 w-12 object-contain"
            />

        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              href="/" 
              className={`font-medium transition-colors ${
                activePath === '/' 
                  ? (scrollPosition > 50 ? 'text-blue-600' : 'text-blue-200') 
                  : (scrollPosition > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link 
              href="/galeri" 
              className={`font-medium transition-colors ${
                activePath === '/galeri' 
                  ? (scrollPosition > 50 ? 'text-blue-600' : 'text-blue-200') 
                  : (scrollPosition > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200')
              }`}
            >
              Galeri Karya
            </Link>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className={`md:hidden focus:outline-none ${scrollPosition > 50 ? 'text-blue-800' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-3">
            <li>
              <Link 
                href="/" 
                className={`block py-2 transition-colors ${
                  activePath === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link 
                href="/galeri" 
                className={`block py-2 transition-colors ${
                  activePath === '/galeri' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galeri Karya
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;