import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Linda Eng</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a FullStack developer.<br className="sm:block hidden" /> Check out my portfolio below!
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[70px] rounded-2xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
            {/* Triangle 1 */}
            <svg width="10" height="10" viewBox="0 0 10 10">
              <polygon points="5,0 10,10 0,10" fill="#915eff" transform="rotate(180 5 5)" />
            </svg>
            {/* Triangle 2 */}
            <svg width="10" height="10" viewBox="0 0 10 10">
              <polygon points="5,0 10,10 0,10" fill="#915eff" transform="rotate(180 5 5)" />
            </svg>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
