import React, { useState } from "react";
import Footer from "./components/footer"; // Import the Footer component

// Reusable components
const Logo = () => (
  <div className="flex items-center justify-center py-4 w-full">
  <span className="text-green-800 text-2xl md:text-3xl font-semibold tracking-wider">
    Ahmeraki Cafe
  </span>
</div>
);

const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div className="md:hidden">
    <button
      onClick={toggleMenu}
      className="p-2 focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>
);

const Nav = ({ isOpen }) => {
  const navLinks = [
    "Home",
    "Our Story",
    "Product Collection",
    "Menu",
    "Join Our Family",
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block w-full border-t border-b border-gray-200 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-8 lg:space-x-14 uppercase text-sm tracking-wider font-medium">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-800 hover:text-amber-700"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden w-full ${
          isOpen ? "block" : "hidden"
        } border-t border-gray-200`}
      >
        <div className="flex flex-col items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 hover:text-amber-700 uppercase text-sm tracking-wider font-medium py-4 border-b border-gray-200 w-full text-center"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

const Button = ({ primary, children, className }) => (
  <button
    className={`py-2 px-4 md:px-6 rounded-sm ${
      primary
        ? "bg-gray-800 text-white hover:bg-gray-900"
        : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50"
    } ${className}`}
  >
    {children}
  </button>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const galleryImages = [
    "/Breakfastclub-cup-latte.jpg",
    "/Two-customers-breakfast.jpg",
    "/Barista-pouring-milk.jpg",
    "/Breakfast-bowl-combo.jpg",
    "/Customer-burger.jpg",
    "/Cafe-cup-milk.jpg",
    "/Two-customers-coffee.jpg",
    "/Ahmeraki-cup.jpg",
    "/Launch-photo.jpg",
    "/Lunch-outside.jpg"
  ];

  const featureItems = [
    {
      title: "Exclusive Member Events",
      description:
        "Participate in curated events designed for connection and camaraderie among our esteemed members.",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z",
    },
    {
      title: "Networking Opportunities",
      description:
        "Forge lasting connections with industry leaders and fellow coffee lovers in an exclusive setting.",
      icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col w-screen m-0 p-0 overflow-x-hidden bg-gray-50">
      {/* Header with responsive navigation */}
      <header className="bg-gray-50">
        <div className="flex justify-between items-center px-4 md:px-8">
          <Logo />
          <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
        </div>
        <Nav isOpen={mobileMenuOpen} />
      </header>

      {/* Hero Section */}
      <section 
  className="relative py-24 md:py-32 lg:py-40 px-4 md:px-8 flex flex-col items-center overflow-hidden"
>
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <img 
      src="/Ahmeraki-hero-image.jpg" 
      alt="Luxury café interior" 
      className="w-full h-full object-cover"
      // In production, replace with actual image: 
      // src="https://your-cdn.com/images/luxury-cafe-background.jpg"
    />
  </div>
  
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent opacity-40"></div>
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent opacity-40"></div>
  
  {/* Content Container with Blur Effect */}
  <div className="relative z-10 max-w-4xl mx-auto text-center px-8 py-12 rounded-xl">
    {/* Blurred background for text area */}
    <div className="absolute inset-0 bg-grey/50 backdrop-blur-sm rounded-xl"></div>
    
    {/* Content inside blurred container */}
    <div className="relative z-10">
      {/* Decorative element
      <div className="w-16 h-1 bg-amber-500 mx-auto mb-8"></div>
     */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
        Experience Unmatched
        <br />
        <span className="text-green-950 font-semibold">Elegance at the Cafe</span>
      </h1>
    
      {/* Subtle separator */}
      <div className="w-24 h-px bg-amber-400 mx-auto my-8 opacity-70"></div>
    
      <p className="text-center max-w-2xl text-gray-100 mb-10 md:mb-12 px-4 text-lg md:text-xl font-light leading-relaxed mx-auto">
        Indulge in a premier coffee experience where elegance meets
        excellence. Our luxury cafe offers world-class beverages, breathtaking
        ambiance, and exceptional service tailored to your every need.
      </p>
    
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
        <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Join Now
        </button>
        <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Gallery Grid - Responsive */}
      <section className="w-full overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-green-800 mb-4">
              Our Curated Atmosphere
            </h2>
            <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the elegant ambiance and thoughtful details that make
              our spaces truly exceptional.
            </p>
          </div>

          {/* Gallery Container - Unified Layout */}
          <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-12">
            {/* Featured Image - Takes full width on mobile, 8 columns on desktop */}
            <div className="col-span-2 md:col-span-8 h-48 sm:h-64 md:h-96 group relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
              <img
                src={galleryImages[0]}
                alt="Featured gallery image"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Top right images - Stack on mobile, side by side on desktop */}
            <div className="col-span-2 md:col-span-4 grid grid-cols-2 md:grid-rows-2 gap-3 md:gap-6">
              <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={galleryImages[1]}
                  alt="Gallery image 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={galleryImages[2]}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={galleryImages[9]}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="col-span-1 h-24 sm:h-32 md:h-44 group relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={galleryImages[8]}
                  alt="Gallery image 3"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bottom Row - 2 columns on mobile, 4 columns on desktop */}
            {galleryImages.slice(3, 7).map((src, i) => (
              <div
                key={`gallery-${i}`}
                className="col-span-1 md:col-span-3 h-32 sm:h-40 md:h-64 group relative overflow-hidden rounded-xl shadow-lg"
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={src}
                  alt={`Gallery image ${i + 4}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white rounded-md transition-colors duration-300 font-medium text-sm tracking-wider uppercase">
              View Full Gallery
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Luxury and Community Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50 text-center">
        <div className="container mx-auto px-6 lg:px-16 mb-32">
          <h2 className="text-3xl md:text-4xl font-light text-green-800 mb-4">
            Comfort and Connection
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mb-32">
          When you join our café, you&apos;ll enjoy exclusive member events, curated tastings, and unique networking opportunities. Connect with fellow coffee lovers and elevate your experience in a welcoming, upscale space.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h4 className="uppercase text-gray-500 tracking-widest text-xs font-medium mb-4">
              EXPLORE
            </h4>
            <h2 className="text-3xl md:text-2xl lg:text-3xl font-light text-green-800 mb-6 leading-tight">
            Designed for Comfort
              <br />
              and Connection
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Ahmeraki Café, we believe in the art of infusing passion and
              purity into everything we do. Our name, derived from the essence
              of "doing something with total love and pure soul," embodies our
              commitment to delivering a unique and heartfelt experience to each
              guest. Located in the heart of Constant Spring.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Ahmeraki Café is a sanctuary for those seeking a moment of genuine
              connection and soulful indulgence. Our warm, inviting atmosphere
              provides the perfect backdrop for intimate conversations, creative
              inspirations, and serene escapes from the everyday hustle.
            </p>
            <button className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Read More
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl w-full h-64 md:h-96">
            <img
              src="/Breakfast-bowl.jpg"
              alt="Cafe interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature Items - Optional section below the main content */}
        <div className="container mx-auto mt-20 px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-6 text-amber-700">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Two-customers-breakfast.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Experience Luxury Coffee Today
          </h2>
          <p className="text-white mb-6 md:mb-8">
            Discover the exclusive benefits of membership and schedule your
            personalized tour with us.
          </p>
          <div className="flex justify-center space-x-3 md:space-x-4">
            <button className="rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out">
              Learn More
            </button>

            <button className="rounded-lg bg-gray-600 text-white px-4 py-2 hover:bg-gray-500 hover:shadow-lg transition duration-300 ease-in-out">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
