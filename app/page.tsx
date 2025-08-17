"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Printer, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-4 shadow-lg bg-white flex justify-between items-center px-6 sm:px-12 rounded-b-2xl">
        <div className="flex items-center gap-4">
          <motion.img
            src="https://lh3.googleusercontent.com/-e20-NCq5B7A/AAAAAAAAAAI/AAAAAAAAAAA/D1ny7hqULG0/s60-c-k-mo/photo.jpg"
            alt="Vyas eprint logo"
            aria-label="Rotating Vyas eprint logo"
            className="w-12 h-12 sm:w-20 sm:h-20 rounded-full border-2 border-pink-500"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <h1 className="text-xl sm:text-3xl font-extrabold text-pink-600 tracking-wide">
            Vyas Eprint ✨
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center justify-between w-11/12 mt-12 bg-white rounded-2xl shadow-xl p-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-pink-600 leading-tight">
            Your Friendly <span className="text-yellow-500">Printout</span> &
            <span className="text-blue-500"> Stationery </span> Shop 🎨
          </h2>
          <p className="text-lg text-gray-600">
            Explore colorful pens, notebooks, and hassle-free Printout services.
            Let’s make your work and studies more fun & exciting!
          </p>
        </div>

        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
          alt="Stationery illustration"
          className="w-80 h-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </motion.section>

      {/* Categories */}
      <section className="w-11/12 mt-16">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Explore Our Categories 📚
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: Printer, label: "Printout Services", color: "bg-blue-100" },
            { icon: ShoppingCart, label: "Stationery", color: "bg-green-100" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className={`${item.color} p-6 rounded-2xl shadow-md flex flex-col items-center hover:scale-105 transition-transform cursor-pointer`}
              whileHover={{ y: -5 }}
            >
              <item.icon className="w-12 h-12 text-pink-600 mb-4" />
              <p className="font-semibold text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="w-11/12 mt-20 bg-white rounded-2xl shadow-lg p-10 text-center">
        <h3 className="text-3xl font-bold text-pink-600 mb-8">Contact Us 📞</h3>
        <div className="flex flex-col sm:flex-row sm:justify-around gap-8 text-lg text-gray-700">
          <div className="flex items-center gap-3 justify-center">
            <FaWhatsapp className="text-green-500  w-7 h-7 text-4xl font-bold" />
            <span className="font-bold text-2xl">+91 79767 11516</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Mail className="text-blue-500 w-7 h-7" />
            <span className="font-bold text-2xl">vyaseprints@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 justify-center max-w-sm text-center">
            <MapPin className="text-red-500 w-7 h-7" />
            <span className="font-bold ">
              21E/348, CHB, Pal Road, Near Udyan Apartment, Jodhpur - 342008
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-20 py-6 bg-pink-600 text-white text-center rounded-t-2xl">
        <p>© 2025 Vyas Eprint | Making stationery fun again ✨</p>
      </footer>
    </div>
  );
}
