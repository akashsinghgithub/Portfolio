import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech in Electronics & Communication Engineering"
            subTitle="(2022-2025)"
            result="7.77/10"
            des="Institute of Engineering and Technology Lucknow."
          />
          <ResumeCard
            title="Intermidiate"
            subTitle="(2017 - 2019)"
            result="7.23/10"
            des="S R Inter  College Gharighat Gonda."
          />
          <ResumeCard
            title="High School"
            subTitle=" (2015-2017)"
            result="7.34/10"
            des="L B S I C Musaha Basti."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education