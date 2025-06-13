import { FaMapMarkerAlt } from "react-icons/fa";

export default function NewsletterSection() {
  return (
    <section className="w-full bg-gray-200 rounded-lg py-8 sm:py-12 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 tracking-wide">
          STAY UP TO DATE
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Enter your email address to receive updates on new product previews, ad promotions,
          special offers and latest know-how on skincare routines.
        </p>
        <form className="flex flex-col gap-3 items-center w-full">
          {/* Responsive input/button arrangement */}
          <div className="flex flex-col sm:flex-row w-full max-w-lg">
            <input
              type="email"
              placeholder="EMAIL"
              className="
                flex-1 rounded-t-full sm:rounded-t-none sm:rounded-l-full
                px-5 py-3 border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700
                text-sm sm:text-base
              "
            />
            <button
              type="submit"
              className="
                bg-black text-white px-6 py-3
                rounded-b-full sm:rounded-l-none sm:rounded-r-full
                font-semibold transition hover:bg-gray-800
                text-sm sm:text-base
              "
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
