const dropdownData = {
FACE: {
categories: [
{
title: "Face Moisturizers",
sub: ["Day Creams & Lotions", "Night Creams", "Hydrating Gels"]
},
{ title: "Facial Cleansers" },
{ title: "Exfoliators" },
{ title: "Ubtans" },
{ title: "Face Masques & Leps" },
{ title: "Facial Mists & Toners" },
{ title: "Facial Serums" },
{ title: "Eye Care" },
{ title: "Lip Treatment" }
],
concerns: [
"Anti-acne", "Anti Ageing", "Skin Dullness", "Night Care", "Sun Protection (SPF)", "Dry Skin",
"Oil Control", "Tan Removal", "Pigmentation", "Dark Circles"
],
image: "https://pplx-res.cloudinary.com/image/private/user_uploads/64054451/cf7b0524-61e0-4666-a09d-773877552eee/image.jpg"
},
// Add similar objects for other menu items as needed
};

export default function DropdownMenu({ hoveredMenu, setHoveredMenu }) {
  if (!hoveredMenu || !dropdownData[hoveredMenu]) return null;
  const { categories, concerns, image } = dropdownData[hoveredMenu];

  return (
    <div
      className="absolute left-0 w-full bg-white shadow-xl border-t z-10"
      onMouseEnter={() => setHoveredMenu(hoveredMenu)}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-16 py-6 md:py-10 px-4 md:px-10">
        {/* Shop by Category */}
        <div className="w-full md:w-1/3 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
          <h4 className="font-bold mb-4 text-base md:text-lg">Shop by Category</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((cat, idx) => (
              <li key={idx}>
                {cat.title}
                {cat.sub && (
                  <ul className="ml-4 text-xs space-y-1 mt-1">
                    {cat.sub.map((sub, i) => (
                      <li key={i}>&gt; {sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Shop by Concern */}
        <div className="w-full md:w-1/3 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
          <h4 className="font-bold mb-4 text-base md:text-lg">Shop By Concern</h4>
          <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-4">
            {concerns.map((concern, idx) => (
              <li key={idx}>{concern}</li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/3 flex items-center justify-center pl-0 md:pl-8 pt-4 md:pt-0">
          <div className="relative w-full max-w-xs md:max-w-full">
            <img
              src={image}
              alt="Dropdown Visual"
              className="rounded-lg w-full h-32 md:h-44 object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg text-white font-semibold text-base md:text-lg opacity-0 hover:opacity-100 transition-opacity">
              VIEW ALL PRODUCTS &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
