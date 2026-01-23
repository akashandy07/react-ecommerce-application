import React from "react";
import { Truck, RefreshCcw, ShieldCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floating = (delay = 0) => ({
  y: [0, -14, 0],
  transition: {
    duration: 2.8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    delay,
  },
});

const ShopDeatils = () => {
  const cards = [
    {
      icon: <Truck className="mx-auto mb-4 text-yellow-500" size={32} />,
      title: "Free Shipping",
      desc: "On all orders over ₹999",
    },
    {
      icon: <RefreshCcw className="mx-auto mb-4 text-yellow-500" size={32} />,
      title: "Easy Returns",
      desc: "30-day money back guarantee",
    },
    {
      icon: <ShieldCheck className="mx-auto mb-4 text-yellow-500" size={32} />,
      title: "Secure Payment",
      desc: "100% secure payment",
    },
    {
      icon: <Headphones className="mx-auto mb-4 text-yellow-500" size={32} />,
      title: "24/7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-between gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileInView={floating(index * 0.35)}
            viewport={{ once: true }}
            className="animated-border flex-1 min-w-[220px]"
          >
            <div className="rounded-lg p-6 text-center bg-white shadow-md hover:shadow-xl transition">
              {card.icon}
              <h3 className="font-semibold text-lg mb-1">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopDeatils;
