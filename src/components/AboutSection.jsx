export default function AboutSection() {
  const cards = [
    {
      image: "/images/natural-actives.jpg",
      title: "100% Natural Actives",
      description:
        "We blend traditional Indian skincare wisdom with modern science to create products powered by 100% natural actives. Every ingredient is carefully selected for purity and efficacy, so you experience true, gentle care.",
    },
    {
      image: "/images/no-chemicals.jpg",
      title: "Free from Harmful Chemicals",
      description:
        "Our promise: no parabens, sulfates, silicones, or harsh additives—ever. Every formula is researched, trial-tested, and designed to nourish without side effects, so your skin and hair get only the best.",
    },
    {
      image: "/images/love-transparency.jpg",
      title: "Made with Love & Transparency",
      description:
        "Natural & Pure is not just a brand — it’s an emotion. We believe true beauty shines through when care is pure, honest, and natural. Every product is made with love, honesty, and full transparency.",
    },
    {
      image: "/images/for-every-skin.jpg",
      title: "For Every Skin, In Every Town",
      description:
        "Our mission is to make authentic, effective, and safe skincare accessible to everyone, everywhere. No matter your skin type or where you live, Natural & Pure is for you.",
    },
    {
      image: "/images/backed-by-science.jpg",
      title: "Care Like Home, Backed by Science",
      description:
        "We combine the comfort of homegrown care with the confidence of modern research. Each formula is crafted to deliver visible results, while staying true to our roots in Ayurveda and honest beauty.",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 px-2 sm:px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="leaf">🌿</span> About Us – Our Identity
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Natural & Pure is not just a brand — it’s an emotion.<br />
          We believe that true beauty shines through when care is pure, honest, and natural.
        </p>
        {/* Responsive grid for all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-5 sm:p-8 h-full"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-32 sm:h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 mt-8 sm:mt-12 font-medium">
          Every formula is carefully researched and trial-tested, so your skin and hair get the best care without side effects.
        </p>
      </div>
    </section>
  );
}
