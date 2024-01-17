import React, { useState } from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'

function Tech() {

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div 
            className='w-28 h-28 relative text-center' 
            key={technology.name}
        >{technology.name}
          <BallCanvas icon={technology.icon} name={technology.name}/>
        </div>
      ))}
    </div>
  )
}

export default Tech