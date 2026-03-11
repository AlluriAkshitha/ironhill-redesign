import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Pizza, Utensils, IceCream, MapPin, Phone, MessageCircle, Menu as MenuIcon, X, Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const menuData = {
  breakfast: [
    { name: "Classic Omelette", price: "₹245", description: "Farm fresh eggs with peppers, onions, and cheese served with sourdough toast.", image: "https://images.pexels.com/photos/35047345/pexels-photo-35047345.jpeg" },
    { name: "Avocado Toast", price: "₹385", description: "Creamy smashed avocado, cherry tomatoes, and feta on toasted multi-grain bread.", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" },
    { name: "Belgian Waffles", price: "₹325", description: "Fluffy waffles topped with seasonal berries, whipped cream, and maple syrup.", image: "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg" },
    { name: "Smoothie Bowl", price: "₹295", description: "Acai base topped with granola, chia seeds, and fresh tropical fruits.", image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" },
  ],
  pizzas: [
    { name: "Margherita", price: "₹450", description: "Classic tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.", image: "https://images.pexels.com/photos/29021744/pexels-photo-29021744.jpeg" },
    { name: "BBQ Chicken", price: "₹525", description: "Grilled chicken, smoky BBQ sauce, red onions, and cilantro.", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg" },
    { name: "Truffle Mushroom", price: "₹585", description: "Assorted mushrooms, truffle oil, roasted garlic, and parmesan.", image: "https://images.pexels.com/photos/1435184/pexels-photo-1435184.jpeg" },
    { name: "Pepperoni", price: "₹550", description: "Spicy pepperoni, mozzarella, and honey-infused tomato sauce.", image: "https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg" },
  ],
  beverages: [
    { name: "Specialty Espresso", price: "₹185", description: "Our signature blend roasted to perfection.", image: "https://images.pexels.com/photos/33094644/pexels-photo-33094644.jpeg" },
    { name: "Iced Matcha Latte", price: "₹265", description: "Premium ceremonial grade matcha with chilled milk.", image: "https://images.pexels.com/photos/5946639/pexels-photo-5946639.jpeg" },
    { name: "Masala Chai", price: "₹145", description: "Authentic Indian spiced tea brewed with ginger and cardamom.", image: "https://images.pexels.com/photos/6267/tea-cup-drink-mug.jpg" },
    { name: "Watermelon Fresh", price: "₹195", description: "Cold-pressed watermelon with a hint of mint and lime.", image: "https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg" },
  ],
  desserts: [
    { name: "Classic Tiramisu", price: "₹345", description: "Espresso-soaked ladyfingers with mascarpone cream and cocoa.", image: "https://images.pexels.com/photos/11663130/pexels-photo-11663130.jpeg" },
    { name: "Chocolate Lava Cake", price: "₹385", description: "Warm chocolate cake with a molten center, served with vanilla bean gelato.", image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg" },
    { name: "New York Cheesecake", price: "₹365", description: "Rich and creamy cheesecake with a buttery graham cracker crust.", image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg" },
    { name: "Macaron Set", price: "₹245", description: "Box of 4 assorted French macarons (Chef's special).", image: "https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg" },
  ],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Breakfast", href: "#menu" },
    { name: "Pizzas", href: "#menu" },
    { name: "Beverages", href: "#menu" },
    { name: "Desserts", href: "#menu" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3 text-foreground" : "bg-transparent py-6 text-white"}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className={`text-2xl font-serif font-bold flex items-center gap-2 transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
          <Coffee className="w-6 h-6" />
          <span className="tracking-tight">Ironhill Cafe</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-5 flex flex-col gap-4 shadow-lg"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
            <Button className="w-full">Order Online</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://images.pexels.com/photos/18404554/pexels-photo-18404554.jpeg')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="container relative z-10 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-accent font-sans text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-4 block">
          MADHAPUR, HYDERABAD
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
          Ironhill Cafe
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 font-sans tracking-wide">
          Where every cup tells a story and every bite feels like home.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#D4A017] text-black hover:bg-[#B8860B] px-10 py-7 rounded-full font-bold text-base shadow-2xl transition-all">
            Explore Our Menu
          </Button>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-[22px] h-[36px] rounded-full border-2 border-white/50 relative flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </div>
    </motion.div>
  </section>
);

const MenuSection = () => {
  const categories = [
    { id: "breakfast", label: "Breakfast", icon: <Utensils className="w-5 h-5" /> },
    { id: "pizzas", label: "Pizzas", icon: <Pizza className="w-5 h-5" /> },
    { id: "beverages", label: "Beverages", icon: <Coffee className="w-5 h-5" /> },
    { id: "desserts", label: "Desserts", icon: <IceCream className="w-5 h-5" /> },
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">Our Curated Menu</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="mb-20 last:mb-0">
            <div className="flex items-center gap-3 mb-10 border-b border-border pb-4">
              <div className="p-3 bg-secondary rounded-full text-primary">
                {cat.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold capitalize">{cat.label}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData[cat.id as keyof typeof menuData].map((item, idx) => (
                <motion.div
                  key={`${cat.id}-${item.name}-${idx}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all group h-full bg-white">
                    <CardContent className="p-0 flex h-full">
                      <div className="w-1/3 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="w-2/3 p-6 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-primary">{item.name}</h4>
                          <span className="text-accent font-bold text-lg">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ActionButtons = () => (
  <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
    <motion.button
      key="wa-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      title="WhatsApp Us"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
    <motion.button
      key="call-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      title="Call Us"
    >
      <Phone className="w-6 h-6" />
    </motion.button>
    <motion.button
      key="map-btn"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-[#4285F4] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      title="Find Us"
    >
      <MapPin className="w-6 h-6" />
    </motion.button>
  </div>
);

const Footer = () => (
  <footer id="footer" className="bg-primary text-primary-foreground py-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">Ironhill Cafe</h3>
          <p className="text-primary-foreground/70 mb-6">
            Madhapur's favorite spot for premium coffee and gourmet cuisine. Join us for an unforgettable experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-serif font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-2 text-primary-foreground/70">
            <li className="flex justify-between"><span>Mon - Thu:</span> <span>8:00 AM - 11:00 PM</span></li>
            <li className="flex justify-between"><span>Fri - Sat:</span> <span>8:00 AM - 12:00 AM</span></li>
            <li className="flex justify-between"><span>Sunday:</span> <span>9:00 AM - 11:00 PM</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-serif font-bold mb-6">Location</h4>
          <address className="not-italic text-primary-foreground/70">
            <p className="mb-2">123 Cafe Street, Madhapur</p>
            <p className="mb-2">Hyderabad, Telangana 500081</p>
            <p className="mb-4">+91 98765 43210</p>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Get Directions
            </Button>
          </address>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/50">
        <p className="mb-2">&copy; {new Date().getFullYear()} Ironhill Cafe. All rights reserved.</p>
        <p className="italic">Concept redesign created for proposal purposes.</p>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <ActionButtons />
      <Footer />
    </div>
  );
}