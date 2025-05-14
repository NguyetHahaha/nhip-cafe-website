
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Trash2, Package, Truck, Plus, Minus, ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  { 
    id: 'nhip-but-pha',
    name: 'Nhịp Bứt Phá',
    description: 'Cà phê Đen Đá',
    priceM: 29000,
    priceL: 45000,
    image: '/lovable-uploads/81d2d26a-7516-4a3f-9e9a-9a5a8a3fd3e1.png',
  },
  { 
    id: 'nhip-can-bang',
    name: 'Nhịp Cân Bằng',
    description: 'Cà phê Sữa Đá',
    priceM: 32000,
    priceL: 49000,
    image: '/lovable-uploads/6a1662a2-ef72-431d-9f12-309f4d7d1b1f.png',
  },
  { 
    id: 'nhip-diu-em',
    name: 'Nhịp Dịu Êm',
    description: 'Cà phê Bạc Xỉu',
    priceM: 35000,
    priceL: 55000,
    image: '/lovable-uploads/f68917f9-f3df-4c8c-8328-612699c8452d.png',
  },
  { 
    id: 'nhip-bay-bong',
    name: 'Nhịp Bay Bổng',
    description: 'Cà phê Cốt Dừa',
    priceM: 37000,
    priceL: 57000,
    image: '/lovable-uploads/28d980de-d5b2-4d4d-b4fe-769b7ed2803c.png',
  },
];

interface CartItem {
  id: string;
  productId: string;
  size: 'M' | 'L';
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
  const [currentProductId, setCurrentProductId] = useState(initialProductId || PRODUCTS[0].id);
  const [size, setSize] = useState<'M' | 'L'>('M');
  const [ice, setIce] = useState('100');
  const [sugar, setSugar] = useState('100');
  const [note, setNote] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('pickup');
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const selectedProduct = PRODUCTS.find(p => p.id === currentProductId);

  const addToCart = () => {
    if (!selectedProduct) return;
    
    const cartItem: CartItem = {
      id: `${currentProductId}-${Date.now()}`,
      productId: currentProductId,
      size,
      ice,
      sugar,
      quantity,
      note
    };
    
    setCart(prevCart => [...prevCart, cartItem]);
    
    toast({
      title: "Đã thêm vào giỏ hàng!",
      description: `${selectedProduct.name} (${size}) x ${quantity}`,
      duration: 3000,
    });

    // Reset form
    setSize('M');
    setIce('100');
    setSugar('100');
    setNote('');
    setQuantity(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      // If cart is empty, add the current item to cart first
      addToCart();
    }
    
    toast({
      title: "Đặt hàng thành công!",
      description: `Đơn hàng của bạn đang được xử lý.`,
      duration: 5000,
    });

    // Clear cart after successful order
    setCart([]);
  };

  const getItemPrice = (item: CartItem) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return 0;
    
    const basePrice = item.size === 'M' ? product.priceM : product.priceL;
    return basePrice * item.quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + getItemPrice(item), 0) + 
           (currentProductId ? getItemPrice({
             id: '',
             productId: currentProductId,
             size,
             ice,
             sugar,
             quantity,
             note
           }) : 0);
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    
    toast({
      title: "Đã xóa sản phẩm",
      description: "Sản phẩm đã được xóa khỏi giỏ hàng.",
      duration: 3000,
    });
  };

  const getProductById = (id: string) => {
    return PRODUCTS.find(p => p.id === id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Đặt hàng</CardTitle>
              <CardDescription>Tùy chỉnh đồ uống theo sở thích của bạn</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="product">Chọn thức uống</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {PRODUCTS.map((product) => (
                    <div 
                      key={product.id}
                      className={`cursor-pointer rounded-lg border-2 overflow-hidden transition ${
                        currentProductId === product.id 
                          ? 'border-coffee shadow' 
                          : 'border-transparent hover:border-gray-200'
                      }`}
                      onClick={() => setCurrentProductId(product.id)}
                    >
                      <div className="aspect-square w-full">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <p className="text-xs text-gray-500">{product.description}</p>
                        <div className="flex justify-between mt-1 text-xs">
                          <span>M: {product.priceM.toLocaleString()}đ</span>
                          <span>L: {product.priceL.toLocaleString()}đ</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="size">Kích cỡ</Label>
                <RadioGroup id="size" value={size} onValueChange={(value) => setSize(value as 'M' | 'L')} className="flex space-x-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="M" id="size-m" />
                    <Label htmlFor="size-m" className="cursor-pointer">Size M ({selectedProduct?.priceM.toLocaleString()} VND)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="L" id="size-l" />
                    <Label htmlFor="size-l" className="cursor-pointer">Size L ({selectedProduct?.priceL.toLocaleString()} VND)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="ice">Lượng đá</Label>
                <Select value={ice} onValueChange={setIce}>
                  <SelectTrigger id="ice" className="w-full">
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
                <Label htmlFor="sugar">Lượng đường</Label>
                <Select value={sugar} onValueChange={setSugar}>
                  <SelectTrigger id="sugar" className="w-full">
                    <SelectValue placeholder="Chọn lượng đường" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30%</SelectItem>
                    <SelectItem value="50">50%</SelectItem>
                    <SelectItem value="100">100%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Số lượng</Label>
                <div className="flex items-center space-x-2">
                  <button 
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button 
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="note">Ghi chú đặc biệt</Label>
                <Textarea 
                  id="note" 
                  placeholder="Thêm ghi chú cho đơn hàng của bạn..." 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              
              <button 
                type="button"
                onClick={addToCart}
                className="w-full bg-coffee-dark text-white py-3 rounded-md hover:bg-coffee transition flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                Thêm vào giỏ hàng
              </button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Phương thức giao hàng</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Giỏ hàng 
                <Badge variant="outline" className="ml-2">{cart.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>Giỏ hàng của bạn đang trống</p>
                </div>
              ) : (
                cart.map((item) => {
                  const product = getProductById(item.productId);
                  if (!product) return null;
                  
                  return (
                    <div key={item.id} className="flex gap-3 pb-3 border-b">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{product.name}</h4>
                          <button 
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-sm text-gray-500">
                          Size {item.size} · Đá {item.ice}% · Đường {item.sugar}%
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm">x{item.quantity}</span>
                          <span className="font-medium">{getItemPrice(item).toLocaleString()} VND</span>
                        </div>
                        {item.note && (
                          <div className="text-xs text-gray-500 mt-1 italic">
                            Ghi chú: {item.note}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
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
        </div>
      </div>
    </form>
  );
}
