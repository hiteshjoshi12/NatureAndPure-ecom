import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t pt-8 sm:pt-12 pb-4">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-sm text-gray-800 mb-8">
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-3">Shop</h3>
            <ul className="space-y-2">
              <li>MAKEUP</li>
              <li>FACIAL CARE</li>
              <li>BODY CARE</li>
              <li>HAIR CARE</li>
              <li>MEN’S CARE</li>
              <li>MOTHER & BABY CARE</li>
              <li>WELLNESS</li>
              <li>GIFTING</li>
            </ul>
          </div>
          {/* About */}
          <div>
            <h3 className="font-semibold mb-3">About</h3>
            <ul className="space-y-2">
              <li>OUR PHILOSOPHY</li>
              <li>SOCIAL RESPONSIBILITY</li>
              <li>MEDIA & PRESS</li>
              <li>POLICIES</li>
              <li>TERMS</li>
              <li>FAQS</li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>MY ACCOUNT</li>
              <li>CURRENT OFFERS</li>
              <li>STORES</li>
              <li>BLOG</li>
              <li>OUR INGREDIENTS</li>
              <li>FOREST ESSENTIALS UK</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="mb-2">
              <span className="font-medium">Email:</span><br />
              <a href="mailto:service@forestessentialsindia.com" className="text-blue-700 hover:underline">
                
              </a>
            </div>
            <div className="mb-2">
              <span className="font-medium">Phone:</span><br />
              <a href="tel:+918010200666" className="text-blue-700 hover:underline">
                
              </a>
            </div>
            <div className="mt-6">
              <span className="font-semibold">Follow</span>
              <div className="flex gap-3 mt-2 text-gray-400 text-xl sm:text-2xl">
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Methods */}
        <div className="border-t pt-4 sm:pt-6 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-500 gap-3">
          <div className="mb-3 md:mb-0">
            <span className="font-semibold">PAYMENT METHODS</span>
            <div className="flex gap-2 mt-2">
              <img src="/razorpay.png" alt="Razorpay" className="h-8 w-20 object-contain" />
            </div>
          </div>
          {/* Copyright or extra info can go here */}
        </div>
      </div>
    </footer>
  );
}
