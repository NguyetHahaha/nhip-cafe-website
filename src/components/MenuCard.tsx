
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={`group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-coffee' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-coffee-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
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
        
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to={`/order?product=${id}`}
            className="block w-full text-center bg-coffee text-white hover:bg-coffee-dark transition py-2 rounded-md"
          >
            Đặt ngay
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
