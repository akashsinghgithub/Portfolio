import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-gray-300">Fresher</h2>
      <div class="w-full md:w-3/5 lg:w-1/2 h-1/3 group flex my-10">
  <div class="w-10 h-[6px] bg-black mt-14 relative">
    <span class="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
      <span class="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
    </span>
  </div>

  <div class="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne">
    <div class="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
      <div class="flex gap-4">
        <h3 class="text-xl md:text-xl font-semibold group-hover:text-white duration-300">Looking for an Entry Level job and want to work as an intern.</h3>
        <p class="text-sm mt-2 text-gray-400 group-hover:text-white duration-300"></p>
      </div>
    </div>
    <p class="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300"></p>
  </div>
</div>



    </motion.div>
  );
};

export default Experience;
