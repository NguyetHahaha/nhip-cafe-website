
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-coffee" />
            <span className="text-2xl font-semibold text-coffee-dark">Nhịp Cà Phê</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-coffee hover:text-coffee-dark transition-colors">
              Trang chủ
            </Link>
            <Link to="/about" className="text-coffee hover:text-coffee-dark transition-colors">
              Về chúng tôi
            </Link>
            <Link to="/menu" className="text-coffee hover:text-coffee-dark transition-colors">
              Menu
            </Link>
            <Link to="/order" className="text-coffee hover:text-coffee-dark transition-colors">
              Đặt hàng
            </Link>
            <Link to="/news" className="text-coffee hover:text-coffee-dark transition-colors">
              Tin tức & Sự kiện
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-coffee hover:text-coffee-dark transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <Link 
              to="/" 
              className="text-coffee hover:text-coffee-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link 
              to="/about" 
              className="text-coffee hover:text-coffee-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link 
              to="/menu" 
              className="text-coffee hover:text-coffee-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/order" 
              className="text-coffee hover:text-coffee-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Đặt hàng
            </Link>
            <Link 
              to="/news" 
              className="text-coffee hover:text-coffee-dark transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tin tức & Sự kiện
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
