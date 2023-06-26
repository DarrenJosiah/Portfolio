import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";

function Works() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }

  return (
    <div className='bg-pink-500 font-spaceGrotesk h-auto pb-32'>
      <p className='p-8'>PERSONAL PROJECTS</p>
      
      <div className='flex flex-row w-auto h-auto place-items-center place-content-center'
        style={{
          perspective: 400,
        }}
        onMouseMove={handleMouse}
      >
        {/* Table */}
        <div>
          <p className='p-8'>Table</p>
          <motion.div
            className='w-[30vw] h-[40vh]'
              style={{
                  borderRadius: 15,
                  backgroundColor: "white",
                  rotateX: rotateX,
                  rotateY: rotateY,
              }}
          />

          {/* Sorting function */}
          {/* Columns of table:

            Name
            Est duration 
            Frameworks used

          */}
        </div>
        

        {/* Preview */}
        <div>
          <p className='p-8'>Preview</p>
          <motion.div
            className='w-[30vw] h-[40vh]'
              style={{
                  borderRadius: 15,
                  backgroundColor: "white",
                  rotateX: rotateX,
                  rotateY: rotateY,
              }}
          />
          </div>
 
        {/* Snapshot of Github commits? */}

        {/* Pie chart? */}
      </div>
    </div>
  )
}

export default Works