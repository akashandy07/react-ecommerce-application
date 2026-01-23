import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Relative wrapper */}
      <div className="relative h-[580px] overflow-hidden">

        {/* Image */}
        <img
          src="/images/banner.png"
          alt="Shop banner"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text content */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="ml-20 max-w-md"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >

            {/* 🔥 OFFER TITLE WITH COLOR + GLOW */}
            <motion.h1
              className="
                text-7xl font-extrabold mb-4
                drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]
              "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                color: ["#FACC15", "#FB7185", "#38BDF8", "#A78BFA", "#FACC15"],
              }}
              transition={{
                delay: 0.2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Big Sale 🔥
            </motion.h1>

            {/* OFFER TEXT */}
            <motion.p
              className="mb-6 text-lg text-white pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Up to <span className="text-yellow-400 font-semibold">50% OFF</span>{" "}
              on latest fashion
            </motion.p>

            {/* BUTTON */}
            <Link to="/ProductData">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 20px rgba(250,204,21,0.9)",
                }}
                whileTap={{ scale: 0.95 }}
                className="
                  bg-yellow-400 text-black px-8 py-3
                  rounded-md font-bold
                  hover:bg-yellow-500 transition
                "
              >
                Shop Now
              </motion.button>
            </Link>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
