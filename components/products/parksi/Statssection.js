'use client';

import { motion } from 'framer-motion';

const software = [
  {
    image: 'https://parkomax.com/wp-content/uploads/2024/08/Parking-Management-Software-1536x1291.webp',
    title: 'Parking Management Software',
    description:
      'Automates and streamlines the parking operations; facilitates real-time monitoring, data analysis, and reporting.',
  },
  {
    image: 'https://parkomax.com/wp-content/uploads/2024/08/Tenant-management-software-1536x1381.webp',
    title: 'Tenant Management Software',
    description:
      'Responsible for handling the tenant information and helps in efficient property management.',
  },
];

export default function SoftwareSolutions() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-20">

          <span className="inline-block bg-[#0161FE] text-white text-sm font-semibold px-4 py-1.5 rounded-sm">
            Software Solutions
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            User-friendly Interfaces, Swift Operation
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-4xl mx-auto">

          {software.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="text-center group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl bg-[#F5F5F5] shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600  max-w-md mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}