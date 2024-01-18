import React, { useState } from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'

import { SectionWrapper  } from '../hoc'

function Tech() {

  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Skills</p>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
    </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div 
              className='w-28 h-28 relative text-center' 
              key={technology.name}
          >{technology.name}
            <BallCanvas icon={technology.icon} name={technology.name}/>
          </div>
        ))}
      </div>
  </>
  )
}

export default SectionWrapper(Tech, "tech")