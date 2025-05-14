
import { Link } from 'react-router-dom';

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  priceM: number;
  priceL: number;
  image: string;
  isHighlighted?: boolean;
}

export default function MenuCard({ 
  id, 
  name, 
  description, 
  priceM, 
  priceL, 
  image, 
  isHighlighted = false 
}: MenuCardProps) {
  return (
    <div 
      className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-coffee' : ''
      }`}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-coffee-dark mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-500">Size M</p>
            <p className="font-semibold">{priceM.toLocaleString()} VND</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Size L</p>
            <p className="font-semibold">{priceL.toLocaleString()} VND</p>
          </div>
        </div>
        
        <Link
          to={`/order?product=${id}`}
          className="block w-full text-center bg-coffee text-white hover:bg-coffee-dark transition py-2 rounded-md"
        >
          Đặt ngay
        </Link>
      </div>
    </div>
  );
}
