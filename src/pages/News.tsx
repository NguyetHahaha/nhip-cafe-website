
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const NEWS_ITEMS = [
  {
    id: 'tag-cam-hung',
    title: 'Tag Truyền Cảm Hứng - Quà Nạp Năng Lượng',
    date: '2023-05-01',
    image: '/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png',
    summary: 'Từ 5/5 đến 31/5, Nhịp Cà Phê tặng bạn bộ đôi tiếp sức cho ngày dài: Tag truyền cảm hứng đặc biệt và quà nạp năng lượng kèm theo mỗi đơn hàng.',
    featured: true,
  },
  {
    id: 'bo-suu-tap-vi-nhip',
    title: 'Khám phá bộ sưu tập "Vị Nhịp" mới ra mắt',
    date: '2023-04-15',
    image: '/lovable-uploads/361147e7-f60f-4ad4-abd8-f864dbd884f0.png',
    summary: 'Bộ sưu tập "Vị Nhịp" với 4 hương vị độc đáo đã chính thức có mặt tại Nhịp Cà Phê. Mỗi hương vị được thiết kế cho một cung bậc cảm xúc khác nhau.',
    featured: false,
  },
];

const News = () => {
  const featuredNews = NEWS_ITEMS.find(item => item.featured);
  const regularNews = NEWS_ITEMS.filter(item => !item.featured);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức & Sự Kiện</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cập nhật thông tin mới nhất về khuyến mãi, sản phẩm và các sự kiện đặc biệt của Nhịp Cà Phê
          </p>
        </div>
      </div>
      
      {/* Featured News */}
      {featuredNews && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(featuredNews.date)}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-coffee-dark">{featuredNews.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredNews.summary}</p>
                  <Link
                    to={`/news/${featuredNews.id}`}
                    className="bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold inline-block"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* News List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-coffee-dark">Tin tức gần đây</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-coffee-dark">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{item.summary}</p>
                  <Link
                    to={`/news/${item.id}`}
                    className="text-coffee hover:text-coffee-dark font-medium"
                  >
                    Đọc tiếp →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 bg-coffee bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-coffee-dark">Đăng ký nhận tin</h2>
            <p className="text-gray-600 mb-6">
              Cập nhật thông tin về sản phẩm mới và khuyến mãi đặc biệt từ Nhịp Cà Phê
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
              />
              <button
                type="submit"
                className="bg-coffee text-white hover:bg-coffee-dark transition px-6 py-2 rounded-md"
              >
                Đăng ký
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              Bằng cách đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default News;
