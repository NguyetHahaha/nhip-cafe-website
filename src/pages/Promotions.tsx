
import { useState } from 'react';
import { Coffee, Gift, Star, ChevronRight, User, CreditCard, LogOut, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for promotions
const PROMOTIONS = [
  {
    id: 'tag-cam-hung',
    title: 'Tag Truyền Cảm Hứng - Quà Nạp Năng Lượng',
    description: 'Từ 5/5 đến 31/5, Nhịp Cà Phê tặng bạn bộ đôi tiếp sức cho ngày dài: Tag truyền cảm hứng đặc biệt và quà nạp năng lượng kèm theo mỗi đơn hàng.',
    image: '/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png',
    period: '05/05/2025 - 31/05/2025',
  },
  {
    id: 'combo-vi-nhip',
    title: 'Combo Vị Nhịp - Tiết Kiệm 15%',
    description: 'Thưởng thức trọn bộ 4 hương vị "Vị Nhịp" với giá chỉ từ 115.000đ (tiết kiệm 15%). Áp dụng cho size M và L, kèm thẻ tag đặc biệt.',
    image: '/lovable-uploads/922c840c-288f-4673-b209-3d6c980e97cd.png',
    period: '01/05/2025 - 30/06/2025',
  },
  {
    id: 'sinh-nhat-dau-tien',
    title: 'Kỷ Niệm 1 Năm - Mua 1 Tặng 1',
    description: 'Mừng sinh nhật 1 tuổi của Nhịp. Mua 1 tặng 1 cho tất cả các sản phẩm từ Nhịp Cà Phê vào các ngày thứ 2 và thứ 4 trong tháng 5.',
    image: '/lovable-uploads/361147e7-f60f-4ad4-abd8-f864dbd884f0.png',
    period: 'Thứ 2 & Thứ 4 trong tháng 5/2025',
  },
];

// Mock rewards
const REWARDS = [
  {
    id: 'free-beverage',
    title: 'Thức Uống Miễn Phí',
    description: 'Đổi 100 điểm lấy một thức uống bất kỳ size M.',
    points: 100,
    image: '/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png',
  },
  {
    id: 'birthday-combo',
    title: 'Combo Sinh Nhật',
    description: '1 thức uống size L + 1 bánh sinh nhật nhỏ.',
    points: 150,
    image: '/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png',
  },
  {
    id: 'merchandise',
    title: 'Ly Sứ Nhịp Cà Phê',
    description: 'Ly sứ cao cấp có logo Nhịp Cà Phê.',
    points: 200,
    image: '/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png',
  },
];

// Mock member-only offers
const MEMBER_OFFERS = [
  {
    id: 'happy-hour',
    title: 'Happy Hour - Giảm 20%',
    description: 'Giảm 20% cho tất cả các đồ uống từ 14:00-16:00 mỗi ngày.',
    period: 'Hàng ngày, 14:00-16:00',
    image: '/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png',
  },
  {
    id: 'birthday-month',
    title: 'Ưu Đãi Sinh Nhật',
    description: 'Giảm 30% cho một đơn hàng trong tháng sinh nhật của bạn.',
    period: 'Tháng sinh nhật của bạn',
    image: '/lovable-uploads/361147e7-f60f-4ad4-abd8-f864dbd884f0.png',
  },
];

const Promotions = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loyaltyTab, setLoyaltyTab] = useState('dashboard');
  
  // Mock user data
  const userData = {
    name: "Nguyễn Văn A",
    tier: "Nhịp Tri Kỷ",
    points: 150,
    nextReward: 200,
    memberCode: "NHIP12345",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-coffee-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Khuyến Mãi & Tri Ân</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Khám phá những ưu đãi hấp dẫn và tham gia chương trình Nhịp Tri Ân - nơi mỗi nhịp thưởng thức đều được trân trọng
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="promotions" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-secondary">
              <TabsTrigger value="promotions" className="px-6">Ưu Đãi Hiện Có</TabsTrigger>
              <TabsTrigger value="loyalty" className="px-6">Nhịp Tri Ân</TabsTrigger>
            </TabsList>
          </div>
          
          {/* Promotions Tab */}
          <TabsContent value="promotions" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROMOTIONS.map((promo) => (
                <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{promo.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-sm mt-1">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{promo.period}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{promo.description}</p>
                  </CardContent>
                  <CardFooter>
                    <button className="bg-coffee text-white hover:bg-coffee-dark transition px-4 py-2 rounded-md font-medium flex items-center">
                      Xem Chi Tiết 
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 bg-amber-50 rounded-lg p-8">
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <Coffee className="h-16 w-16 text-coffee" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-coffee-dark">Combo "Vị Nhịp" - Đặc biệt chỉ có tại Nhịp Cà Phê</h3>
                  <p className="text-gray-700 mb-6">
                    Mỗi sản phẩm trong combo "Vị Nhịp" size L sẽ được đi kèm 1 chiếc thẻ tag với các câu nói truyền cảm hứng được 
                    chọn lọc ngẫu nhiên, cùng 1 thanh hạt năng lượng để bạn nạp năng lượng cho một ngày làm việc hiệu quả.
                  </p>
                  <a href="/order?combo=vi-nhip" className="bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold inline-block">
                    Đặt Combo Ngay
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Loyalty Tab */}
          <TabsContent value="loyalty" className="mt-0">
            {!isLoggedIn ? (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src="/lovable-uploads/c1bb8e3d-5b8e-4454-a9ae-573ffa3dd79d.png" 
                        alt="Nhịp Tri Ân" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <Star className="h-6 w-6 text-coffee mr-2" />
                        <h2 className="text-2xl font-bold text-coffee-dark">Nhịp Tri Ân</h2>
                      </div>
                      <p className="text-gray-700 mb-6">
                        Chương trình thành viên đặc biệt dành cho những người yêu thích Nhịp Cà Phê. 
                        Tham gia ngay để tận hưởng các đặc quyền:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                        <li>Tích điểm với mỗi lần mua hàng</li>
                        <li>Đổi điểm lấy các phần thưởng hấp dẫn</li>
                        <li>Ưu đãi đặc biệt dành riêng cho thành viên</li>
                        <li>Quà tặng sinh nhật</li>
                        <li>Thông báo sớm về các sự kiện và sản phẩm mới</li>
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button 
                          onClick={() => setIsLoggedIn(true)}
                          className="bg-coffee text-white hover:bg-coffee-dark transition px-6 py-3 rounded-md font-semibold"
                        >
                          Đăng Ký Ngay
                        </button>
                        <button 
                          onClick={() => setIsLoggedIn(true)}
                          className="border-2 border-coffee text-coffee hover:bg-coffee/10 transition px-6 py-3 rounded-md font-semibold"
                        >
                          Đăng Nhập
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-coffee-dark">Cách thức hoạt động</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="w-12 h-12 rounded-full bg-coffee flex items-center justify-center mb-4 text-white font-bold">1</div>
                      <h4 className="text-xl font-semibold mb-2">Đăng ký thành viên</h4>
                      <p className="text-gray-600">
                        Đăng ký miễn phí và nhận ngay 20 điểm thưởng chào mừng.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="w-12 h-12 rounded-full bg-coffee flex items-center justify-center mb-4 text-white font-bold">2</div>
                      <h4 className="text-xl font-semibold mb-2">Tích điểm thưởng</h4>
                      <p className="text-gray-600">
                        Mỗi 10.000đ chi tiêu sẽ nhận được 1 điểm thưởng.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                      <div className="w-12 h-12 rounded-full bg-coffee flex items-center justify-center mb-4 text-white font-bold">3</div>
                      <h4 className="text-xl font-semibold mb-2">Đổi quà hấp dẫn</h4>
                      <p className="text-gray-600">
                        Sử dụng điểm thưởng để đổi lấy ưu đãi và phần quà giá trị.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-4 text-coffee-dark">Các hạng thành viên</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full bg-white rounded-lg shadow">
                      <thead>
                        <tr className="bg-coffee text-white">
                          <th className="p-4 text-left">Hạng thành viên</th>
                          <th className="p-4 text-left">Điều kiện</th>
                          <th className="p-4 text-left">Đặc quyền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4">
                            <div className="font-semibold">Nhịp Thân Quen</div>
                          </td>
                          <td className="p-4">0-200 điểm/năm</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Tích điểm cơ bản</li>
                              <li>Đổi quà theo danh mục</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4">
                            <div className="font-semibold">Nhịp Gắn Kết</div>
                          </td>
                          <td className="p-4">201-500 điểm/năm</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Tỷ lệ tích điểm cao hơn 10%</li>
                              <li>Quà sinh nhật đặc biệt</li>
                              <li>Ưu tiên khi có sản phẩm mới</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4">
                            <div className="font-semibold">Nhịp Tri Kỷ</div>
                          </td>
                          <td className="p-4">501+ điểm/năm</td>
                          <td className="p-4">
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              <li>Tỷ lệ tích điểm cao hơn 20%</li>
                              <li>Quà sinh nhật đặc biệt + 1 món tùy chọn</li>
                              <li>Ưu tiên khi có sản phẩm mới</li>
                              <li>Mời tham gia sự kiện đặc biệt</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    * Điểm tích lũy sẽ được reset vào ngày 01/01 hàng năm. Hạng thành viên được cập nhật vào đầu mỗi quý.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                {/* Member Dashboard */}
                <div className="bg-white shadow rounded-lg mb-8">
                  <div className="p-4 flex items-center justify-between bg-coffee text-white rounded-t-lg">
                    <div className="flex items-center">
                      <img src="/lovable-uploads/89102af6-e261-4876-9ba4-184db96568b0.png" alt="Logo" className="h-8 w-auto" />
                      <span className="ml-3 font-semibold">NHỊP TRI ÂN</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="p-1.5 hover:bg-white/10 rounded-full">
                        <Bell className="h-5 w-5" />
                      </button>
                      <button onClick={() => setIsLoggedIn(false)} className="p-1.5 hover:bg-white/10 rounded-full">
                        <LogOut className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <Tabs 
                    value={loyaltyTab} 
                    onValueChange={setLoyaltyTab}
                    className="p-4"
                  >
                    <TabsList className="mb-6 w-full">
                      <TabsTrigger value="dashboard" className="flex-1">Bảng Điều Khiển</TabsTrigger>
                      <TabsTrigger value="rewards" className="flex-1">Đổi Quà</TabsTrigger>
                      <TabsTrigger value="offers" className="flex-1">Ưu Đãi Thành Viên</TabsTrigger>
                      <TabsTrigger value="history" className="flex-1">Lịch Sử</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="dashboard">
                      {/* Welcome Card */}
                      <div className="bg-amber-50 p-6 rounded-lg mb-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-coffee text-white p-3 rounded-full">
                            <User className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-coffee-dark">
                              Chào {userData.name}! 
                            </h3>
                            <p className="text-gray-600">
                              Bạn đang là <span className="font-semibold">{userData.tier}</span> của Nhịp.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Points Display */}
                      <div className="bg-white border rounded-lg p-6 mb-8 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Điểm Thưởng</h4>
                            <div className="text-4xl font-bold text-coffee-dark">{userData.points}</div>
                          </div>
                          <div className="mt-4 md:mt-0 w-full md:w-2/3">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Tiến độ tới phần thưởng tiếp theo</span>
                              <span className="font-medium">{userData.points}/{userData.nextReward}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-coffee h-2.5 rounded-full" 
                                style={{ width: `${(userData.points / userData.nextReward) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Member Code */}
                      <div className="bg-white border rounded-lg p-6 mb-8 text-center shadow-sm">
                        <h4 className="text-lg font-semibold mb-4">Mã Thành Viên</h4>
                        <div className="bg-gray-100 py-3 px-6 rounded-md inline-block mx-auto mb-2">
                          <span className="text-xl font-mono font-semibold">{userData.memberCode}</span>
                        </div>
                        <p className="text-gray-500 text-sm">
                          Xuất trình mã này khi mua hàng tại cửa hàng để tích điểm
                        </p>
                      </div>
                      
                      {/* Recent Activity */}
                      <div className="bg-white border rounded-lg p-6 shadow-sm">
                        <h4 className="text-lg font-semibold mb-4">Hoạt Động Gần Đây</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-3 border-b">
                            <div>
                              <div className="font-medium">Mua Nhịp Cân Bằng (Size L)</div>
                              <div className="text-sm text-gray-500">10/05/2025 - 15:30</div>
                            </div>
                            <div className="text-green-600 font-semibold">+5 điểm</div>
                          </div>
                          <div className="flex justify-between items-center pb-3 border-b">
                            <div>
                              <div className="font-medium">Đổi điểm lấy Ưu đãi sinh nhật</div>
                              <div className="text-sm text-gray-500">01/05/2025 - 10:15</div>
                            </div>
                            <div className="text-red-600 font-semibold">-100 điểm</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="rewards">
                      <h3 className="text-xl font-bold mb-6 text-coffee-dark">Đổi Điểm Nhận Quà</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {REWARDS.map((reward) => (
                          <Card key={reward.id} className="overflow-hidden">
                            <div className="aspect-video w-full overflow-hidden">
                              <img 
                                src={reward.image} 
                                alt={reward.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardHeader>
                              <CardTitle>{reward.title}</CardTitle>
                              <CardDescription>
                                <div className="flex items-center text-amber-600 mt-1">
                                  <Star className="mr-1 h-4 w-4 fill-amber-500 text-amber-500" />
                                  <span className="font-semibold">{reward.points} điểm</span>
                                </div>
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600">{reward.description}</p>
                            </CardContent>
                            <CardFooter>
                              <button 
                                className={`px-4 py-2 rounded-md font-medium flex items-center ${
                                  userData.points >= reward.points 
                                    ? "bg-coffee text-white hover:bg-coffee-dark" 
                                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                                } transition`}
                                disabled={userData.points < reward.points}
                              >
                                Đổi Ngay
                              </button>
                              {userData.points < reward.points && (
                                <span className="text-sm text-gray-500 ml-auto">
                                  Còn thiếu {reward.points - userData.points} điểm
                                </span>
                              )}
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="offers">
                      <h3 className="text-xl font-bold mb-6 text-coffee-dark">Ưu Đãi Dành Riêng Cho Thành Viên</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {MEMBER_OFFERS.map((offer) => (
                          <Card key={offer.id} className="overflow-hidden">
                            <div className="md:flex">
                              <div className="md:w-1/3 aspect-square overflow-hidden">
                                <img 
                                  src={offer.image} 
                                  alt={offer.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="md:w-2/3 p-4">
                                <h4 className="text-lg font-semibold mb-2">{offer.title}</h4>
                                <div className="text-sm text-gray-500 mb-2">
                                  <Calendar className="inline h-4 w-4 mr-1" />
                                  <span>{offer.period}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                                <button className="bg-coffee text-white hover:bg-coffee-dark transition px-3 py-1.5 text-sm rounded-md font-medium flex items-center">
                                  Sử Dụng Ngay
                                </button>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="history">
                      <h3 className="text-xl font-bold mb-6 text-coffee-dark">Lịch Sử Hoạt Động</h3>
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="py-3 px-4 text-left">Ngày</th>
                                <th className="py-3 px-4 text-left">Hoạt động</th>
                                <th className="py-3 px-4 text-right">Điểm</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-3 px-4">10/05/2025</td>
                                <td className="py-3 px-4">Mua Nhịp Cân Bằng (Size L)</td>
                                <td className="py-3 px-4 text-right text-green-600">+5</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-3 px-4">01/05/2025</td>
                                <td className="py-3 px-4">Đổi điểm lấy Ưu đãi sinh nhật</td>
                                <td className="py-3 px-4 text-right text-red-600">-100</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-3 px-4">28/04/2025</td>
                                <td className="py-3 px-4">Mua Combo "Vị Nhịp"</td>
                                <td className="py-3 px-4 text-right text-green-600">+15</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-3 px-4">15/04/2025</td>
                                <td className="py-3 px-4">Mua Nhịp Bứt Phá (Size M)</td>
                                <td className="py-3 px-4 text-right text-green-600">+3</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4">10/04/2025</td>
                                <td className="py-3 px-4">Đăng ký thành viên</td>
                                <td className="py-3 px-4 text-right text-green-600">+20</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

// Add Calendar component since we're using it in the component
const Calendar = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default Promotions;
