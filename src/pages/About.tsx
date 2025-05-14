import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Câu chuyện về Nhịp Cà Phê và hành trình theo đuổi niềm đam mê với hương vị cà phê Việt Nam
          </p>
        </div>
      </div>
      
      {/* Intro Section - Based on the provided image */}
      <section className="py-16 bg-cream bg-opacity-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-coffee-light bg-opacity-60 rounded-xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">CÓ NHỮNG "NHỊP" LẶNG THẦM BÊN TA MỖI NGÀY...</h2>
              
              <p className="text-lg mb-6">
                Cuộc sống là một <span className="font-bold">bản giao hưởng tuyệt vời</span>, được dệt nên
                từ vô vàn những cung bậc cảm xúc.
              </p>
              
              <p className="text-lg mb-6">
                Chúng tôi tin rằng, mỗi ngụm thức uống bạn chọn không chỉ đơn 
                thuần là một hương vị, mà còn là <span className="font-bold">một người bạn đồng điệu, một 
                giai điệu tinh tế</span> có thể chạm vào và <span className="font-bold">sẻ chia những "nhịp" lòng ấy</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Origin Story Section - Based on the provided image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-coffee-dark">NHỊP SINH RA TỪ MONG ƯỚC ĐƯỢC SẺ CHIA...</h2>
              
              <p className="mb-6 text-gray-700">
                Không chỉ bắt đầu từ tình yêu với những hạt cà phê 
                Robusta Buôn Ma Thuột đậm đà, hay niềm say mê những lá 
                trà thanh khiết, những vị quả tươi ngon, Nhịp được sinh ra 
                với sứ mệnh: <span className="font-bold text-coffee-dark">được trở thành người bạn tri kỷ, một điểm 
                chạm ấm áp, một nơi chốn mà ở đó, mọi cảm xúc của 
                bạn đều được trân trọng.</span>
              </p>
              
              <p className="text-gray-700">
                Hơn cả một quán cà phê, hơn cả những ly thức uống,
                Nhịp mong muốn trở thành một phần thân thương trong 
                hành trình mỗi ngày của bạn. Nơi bạn có thể tìm thấy 
                không chỉ sự tinh tảo, mà còn là sự sẻ chia, sự thấu hiểu và 
                nguồn năng lượng tích cực để tiếp bước.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-full h-full max-h-[500px]">
                <img 
                  src="/lovable-uploads/fe7498bd-4cb0-4916-ba13-6eb4f4b8dbc2.png" 
                  alt="Nhịp Cà Phê Menu"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section - Based on the provided image */}
      <section className="py-16 bg-cream bg-opacity-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-right mb-4">
                <svg className="inline-block w-10 h-10 text-coffee" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-lg text-gray-700 italic">
                  Tại Nhịp, chúng tôi tin rằng, mỗi giọt 
                  thức uống đều ẩn chứa một "nhịp" 
                  riêng, một cá tính, một năng lượng độc 
                  đáo, chờ đợi để được bạn khám phá
                </p>
                <div className="mt-4 border-t border-gray-300 pt-4 w-1/2 ml-auto">
                  <span className="block text-coffee-dark font-semibold">Nhịp Cà Phê</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brand Values - Keep as requested */}
      <section className="py-16 bg-coffee-light bg-opacity-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-coffee-dark">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Chất Lượng</h3>
              <p className="text-gray-600 text-center">
                Chúng tôi không ngừng tìm kiếm và lựa chọn những hạt cà phê chất lượng cao nhất, đảm bảo mỗi tách cà phê 
                đều hoàn hảo từ nguồn nguyên liệu đến quy trình pha chế.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sáng Tạo</h3>
              <p className="text-gray-600 text-center">
                Luôn đổi mới và sáng tạo trong từng công thức, mang đến những trải nghiệm thú vị và đa dạng cho khách hàng, 
                phản ánh đúng tinh thần "đồng hành mọi nhịp cảm xúc".
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 rounded-full bg-coffee flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Tâm Huyết</h3>
              <p className="text-gray-600 text-center">
                Mỗi sản phẩm đều được tạo ra với tất cả tâm huyết, thể hiện tình yêu của chúng tôi đối với cà phê và 
                mong muốn mang đến những khoảnh khắc trọn vẹn cho khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action - Keep as requested */}
      <section className="py-16 bg-coffee text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trải Nghiệm Nhịp Cà Phê Ngay Hôm Nay</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ghé thăm cửa hàng của chúng tôi hoặc đặt hàng trực tuyến để thưởng thức những ly cà phê đặc biệt từ Nhịp Cà Phê
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://maps.app.goo.gl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-coffee hover:bg-cream transition px-6 py-3 rounded-md font-semibold"
            >
              Tìm Cửa Hàng
            </a>
            <a 
              href="/order" 
              className="bg-transparent border-2 border-white hover:bg-white/10 transition px-6 py-3 rounded-md font-semibold"
            >
              Đặt Hàng Ngay
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
