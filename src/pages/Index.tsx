import { useState } from "react";
import { Gamepad } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array of game images for the latest games section
  const gameImages = [
    "https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg",
    "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
    "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg",
    "https://images.pexels.com/photos/4792731/pexels-photo-4792731.jpeg",
    "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Navbar */}
      <nav className="fixed w-full bg-gaming-dark/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2">
              <Gamepad className="w-8 h-8 text-gaming-accent" />
              <span className="text-2xl font-rajdhani font-bold">GAMEFY</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#top-gamers" className="nav-link">Top gamers</a>
              <a href="#game" className="nav-link">Game</a>
              <a href="#gamers" className="nav-link">Gamers</a>
              <button className="btn-primary">SIGN IN</button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <a href="#top-gamers" className="block nav-link">Top gamers</a>
              <a href="#game" className="block nav-link">Game</a>
              <a href="#gamers" className="block nav-link">Gamers</a>
              <button className="btn-primary w-full">SIGN IN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl leading-tight">
                DISCOVER<br />
                COLLECT GAME<br />
                FROM US
              </h1>
              <p className="text-gray-400">
                Minecraft received critical acclaim, winning several awards and later being cited as one of the greatest video games.
              </p>
              <div className="flex space-x-4">
                <button className="btn-primary">GET STARTED</button>
                <button className="btn-secondary">EXPLORE</button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gaming-accent/20 rounded-full filter blur-3xl animate-glow"></div>
              <img src="https://images.pexels.com/photos/572665/pexels-photo-572665.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gaming Portal" className="relative z-10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Top Products */}
      <section id="top-gamers" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8">CHECK OUR TOP PRODUCT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="game-card">
              <img src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="Genshin Impact" />
              <div className="game-card-overlay p-6">
                <h3 className="text-2xl mb-2">GENSHIN IMPACT - VERSION 3.3</h3>
                <p className="text-sm">Meet the Wanderer and Faruzan, and join in Teyvat's most popular card game!</p>
              </div>
            </div>
            <div className="game-card">
              <img src="https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg" alt="Hello Game" />
              <div className="game-card-overlay p-6">
                <h3 className="text-2xl mb-2">HELLO GAME</h3>
                <p className="text-sm">The most popular game of the year, now available with new updates!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Games */}
      <section id="game" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-8">LATEST GAMES</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gameImages.map((image, index) => (
              <div key={index} className="game-card aspect-[4/3]">
                <img 
                  src={image} 
                  alt={`Game ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="game-card-overlay p-4">
                  <h3 className="text-lg">Game Title {index + 1}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="btn-primary">GET STARTED</button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="gamers" className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gaming-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-4xl mb-4">Join Our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Get the latest updates and news about your favorite games!
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-gaming-dark border border-gaming-accent/50 focus:outline-none focus:border-gaming-accent"
              />
              <button className="btn-primary whitespace-nowrap">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gaming-accent/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link">About</a></li>
                <li><a href="#" className="nav-link">Features</a></li>
                <li><a href="#" className="nav-link">Works</a></li>
                <li><a href="#" className="nav-link">Career</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link">Customer Support</a></li>
                <li><a href="#" className="nav-link">Delivery Details</a></li>
                <li><a href="#" className="nav-link">Terms & Conditions</a></li>
                <li><a href="#" className="nav-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="nav-link">Free eBooks</a></li>
                <li><a href="#" className="nav-link">Development Tutorial</a></li>
                <li><a href="#" className="nav-link">How to - Blog</a></li>
                <li><a href="#" className="nav-link">Youtube Playlist</a></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad className="w-8 h-8 text-gaming-accent" />
                <span className="text-2xl font-rajdhani font-bold">GAMEFY</span>
              </div>
              <p className="text-sm text-gray-400">
                Sit amet, consectetur adipiscing elit. Nullam dictum sagittis diam. Sed felis odio.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
