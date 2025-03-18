import React from "react";

const Luxury = () => {
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
    <>
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
    </>
  );
};

export default Luxury;