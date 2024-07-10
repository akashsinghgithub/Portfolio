import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col justify-center items-end"
    >
    <div class="w-full lgl:w-1/2 h-1/3 group flex my-10">
  <div class="w-10 h-[6px] bgOpacity mt-14 relative">
    <span class="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
      <span class="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
    </span>
  </div>

  <div class="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
    <div class="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
      <div class="flex gap-4">
        <h3 class="text-xl md:text-2xl font-semibold group-hover:text-white duration-300"></h3>
        <p class="text-sm mt-2 text-gray-400 group-hover:text-white duration-300"></p>
      </div>
    </div>

    <div class="flex flex-col gap-y-5">
      <div class="flex flex-row justify-center items-center">
        <h2 class="px-3">I have solved 300+ problems on Different Coding Platforms.</h2>
      </div>

      <div class="flex flex-row justify-center items-center gap-x-10">
        <a class="underline hover:text-designColor " href="https://leetcode.com/u/8081808345akash_singh/" target="_blank" rel="noopener noreferrer">Leetcode</a>
        <a class="underline hover:text-designColor " href="https://www.geeksforgeeks.org/user/user_3vsxrvebajr/" target="_blank" rel="noopener noreferrer">GFG</a>
        <a class="underline hover:text-designColor " href="https://www.codechef.com/users/akassing2019" target="_blank" rel="noopener noreferrer">CodeChef</a>
      </div>
    </div>
  </div>
</div>
    </motion.div>
  );
};

export default Achievement;
