
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription 
} from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Package, Truck, X, Plus, Minus, Gift, Tag } from 'lucide-react';

const PRODUCTS = [
  { 
    id: 'nhip-but-pha',
    name: 'Nhịp Bứt Phá',
    description: 'Cà phê Đen Đá',
    priceM: 29000,
    priceL: 45000,
    image: '/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-can-bang',
    name: 'Nhịp Cân Bằng',
    description: 'Cà phê Sữa Đá',
    priceM: 32000,
    priceL: 49000,
    image: '/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-diu-em',
    name: 'Nhịp Dịu Êm',
    description: 'Cà phê Bạc Xỉu',
    priceM: 35000,
    priceL: 55000,
    image: '/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png',
    category: 'vi-nhip',
  },
  { 
    id: 'nhip-bay-bong',
    name: 'Nhịp Bay Bổng',
    description: 'Cà phê Cốt Dừa',
    priceM: 37000,
    priceL: 57000,
    image: '/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png',
    category: 'vi-nhip',
  },
];

const INSPIRATION_TAGS = [
  "Hãy luôn là phiên bản tốt nhất của chính mình.",
  "Niềm tin tạo nên sức mạnh, và sức mạnh tạo nên thành công.",
  "Chỉ cần một tách cà phê để thay đổi ngày của bạn.",
  "Đừng đếm giờ, hãy tận hưởng từng khoảnh khắc.",
  "Hôm nay sẽ là một ngày tuyệt vời, hãy bắt đầu với một tách cà phê.",
  "Những giấc mơ lớn bắt đầu từ những niềm tin nhỏ.",
];

interface OrderItem {
  productId: string;
  size: string;
  ice: string;
  sugar: string;
  quantity: number;
  note: string;
}

interface OrderFormProps {
  initialProductId?: string;
}

export default function OrderForm({ initialProductId }: OrderFormProps) {
  const { toast } = useToast();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      productId: initialProductId || PRODUCTS[0].id,
      size: 'M',
      ice: '100',
      sugar: '100',
      quantity: 1,
      note: '',
    }
  ]);
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');

  const handleAddItem = () => {
    setOrderItems([
      ...orderItems,
      {
        productId: PRODUCTS[0].id,
        size: 'M',
        ice: '100',
        sugar: '100',
        quantity: 1,
        note: '',
      }
    ]);
  };

  const handleRemoveItem = (index: number) => {
    if (orderItems.length === 1) {
      toast({
        title: "Không thể xóa",
        description: "Đơn hàng phải có ít nhất một sản phẩm.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    const newItems = [...orderItems];
    newItems.splice(index, 1);
    setOrderItems(newItems);
  };

  const updateOrderItem = (index: number, field: keyof OrderItem, value: any) => {
    const newItems = [...orderItems];
    newItems[index] = { ...newItems[index], [field]: value };
    setOrderItems(newItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Đặt hàng thành công!",
      description: `${orderItems.length} sản phẩm đã được thêm vào giỏ hàng.`,
      duration: 5000,
    });

    // Reset form or redirect to cart page
    setOrderItems([
      {
        productId: PRODUCTS[0].id,
        size: 'M',
        ice: '100',
        sugar: '100',
        quantity: 1,
        note: '',
      }
    ]);
  };

  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => {
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (!product) return total;
      
      const basePrice = item.size === 'M' ? product.priceM : product.priceL;
      return total + (basePrice * item.quantity);
    }, 0);
  };

  const getRandomInspirationTag = () => {
    const randomIndex = Math.floor(Math.random() * INSPIRATION_TAGS.length);
    return INSPIRATION_TAGS[randomIndex];
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Đặt hàng</CardTitle>
          <CardDescription>Tùy chỉnh đồ uống theo sở thích của bạn</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {orderItems.map((item, index) => {
            const selectedProduct = PRODUCTS.find(p => p.id === item.productId);
            
            return (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Sản phẩm {index + 1}</h3>
                  {orderItems.length > 1 && (
                    <button 
                      type="button" 
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:bg-red-50 rounded-full p-1"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor={`product-${index}`}>Chọn thức uống</Label>
                    <div className="flex gap-4">
                      <Select 
                        value={item.productId} 
                        onValueChange={(value) => updateOrderItem(index, 'productId', value)}
                      >
                        <SelectTrigger id={`product-${index}`} className="w-full">
                          <SelectValue placeholder="Chọn thức uống" />
                        </SelectTrigger>
                        <SelectContent>
                          {PRODUCTS.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name} - {product.description}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="mt-4">
                      <Label htmlFor={`size-${index}`}>Kích cỡ</Label>
                      <RadioGroup 
                        id={`size-${index}`} 
                        value={item.size} 
                        onValueChange={(value) => updateOrderItem(index, 'size', value)} 
                        className="flex space-x-4 mt-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="M" id={`size-m-${index}`} />
                          <Label htmlFor={`size-m-${index}`} className="cursor-pointer">
                            Size M ({selectedProduct?.priceM.toLocaleString()} VND)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="L" id={`size-l-${index}`} />
                          <Label htmlFor={`size-l-${index}`} className="cursor-pointer">
                            Size L ({selectedProduct?.priceL.toLocaleString()} VND)
                          </Label>
                        </div>
                      </RadioGroup>
                      
                      {item.size === 'L' && item.productId.includes('nhip') && (
                        <div className="mt-2 flex items-start gap-2 text-sm bg-green-50 p-2 rounded-md text-green-700">
                          <Gift className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Tặng kèm 1 thanh năng lượng granola khi chọn size L</span>
                        </div>
                      )}
                      
                      {item.productId.includes('nhip') && (
                        <div className="mt-2 flex items-start gap-2 text-sm bg-blue-50 p-2 rounded-md text-blue-700">
                          <Tag className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>Tag truyền cảm hứng: "{getRandomInspirationTag()}"</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor={`ice-${index}`}>Lượng đá</Label>
                        <Select 
                          value={item.ice} 
                          onValueChange={(value) => updateOrderItem(index, 'ice', value)}
                        >
                          <SelectTrigger id={`ice-${index}`} className="w-full">
                            <SelectValue placeholder="Chọn lượng đá" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30%</SelectItem>
                            <SelectItem value="50">50%</SelectItem>
                            <SelectItem value="100">100%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor={`sugar-${index}`}>Lượng đường</Label>
                        <Select 
                          value={item.sugar} 
                          onValueChange={(value) => updateOrderItem(index, 'sugar', value)}
                        >
                          <SelectTrigger id={`sugar-${index}`} className="w-full">
                            <SelectValue placeholder="Chọn lượng đường" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30%</SelectItem>
                            <SelectItem value="50">50%</SelectItem>
                            <SelectItem value="100">100%</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <Label htmlFor={`quantity-${index}`}>Số lượng</Label>
                      <div className="flex items-center space-x-2">
                        <button 
                          type="button"
                          onClick={() => updateOrderItem(index, 'quantity', Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button 
                          type="button"
                          onClick={() => updateOrderItem(index, 'quantity', item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <Label htmlFor={`note-${index}`}>Ghi chú đặc biệt</Label>
                      <Textarea 
                        id={`note-${index}`} 
                        placeholder="Thêm ghi chú cho đơn hàng của bạn..." 
                        value={item.note}
                        onChange={(e) => updateOrderItem(index, 'note', e.target.value)}
                        className="resize-none"
                        rows={2}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    {selectedProduct && (
                      <div className="text-center">
                        <img 
                          src={selectedProduct.image} 
                          alt={selectedProduct.name}
                          className="w-32 h-32 object-cover mx-auto rounded-lg shadow-md"
                        />
                        <p className="mt-2 font-medium text-coffee-dark">{selectedProduct.name}</p>
                        <p className="text-sm text-gray-600">{selectedProduct.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          <div className="flex justify-center">
            <button 
              type="button"
              onClick={handleAddItem}
              className="flex items-center gap-1 text-coffee hover:text-coffee-dark transition-colors"
            >
              <Plus size={18} /> Thêm sản phẩm
            </button>
          </div>
          
          <div>
            <Label className="mb-2 block">Phương thức giao hàng</Label>
            <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="space-y-3">
              <div className="flex items-start space-x-3 rounded-lg border p-3">
                <RadioGroupItem value="pickup" id="pickup" />
                <div className="flex flex-1 items-start space-x-3">
                  <Package className="h-5 w-5 text-coffee mt-0.5" />
                  <div>
                    <Label htmlFor="pickup" className="cursor-pointer">Đến lấy</Label>
                    <p className="text-sm text-gray-500">Đến cửa hàng để lấy đồ uống của bạn</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rounded-lg border p-3">
                <RadioGroupItem value="delivery" id="delivery" />
                <div className="flex flex-1 items-start space-x-3">
                  <Truck className="h-5 w-5 text-coffee mt-0.5" />
                  <div>
                    <Label htmlFor="delivery" className="cursor-pointer">Giao hàng</Label>
                    <p className="text-sm text-gray-500">
                      Nhịp Cà Phê miễn phí giao hàng trong bán kính 3km, 
                      từ km thứ 4 sẽ tính phí giao hàng là 4.000 VND trên 1km
                    </p>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        
        <CardFooter className="flex-col space-y-4">
          <div className="flex justify-between w-full text-lg font-semibold">
            <span>Tổng thanh toán:</span>
            <span>{calculateTotalPrice().toLocaleString()} VND</span>
          </div>
          <button 
            type="submit"
            className="w-full bg-coffee text-white py-3 rounded-md hover:bg-coffee-dark transition"
          >
            Đặt hàng
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
