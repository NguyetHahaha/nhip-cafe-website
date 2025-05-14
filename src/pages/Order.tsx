
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderForm from "@/components/OrderForm";

const Order = () => {
  const [searchParams] = useSearchParams();
  const initialProductId = searchParams.get('product');
  
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Đặt Hàng</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Tùy chỉnh đồ uống theo sở thích và nhận giao hàng nhanh chóng
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <OrderForm initialProductId={initialProductId || undefined} />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Order;
