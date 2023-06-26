import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"

function Footer() {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.stop();
  };

  const handleHoverEnd = () => {
    controls.start({
      x: '100%',
      transition: { duration: 5, repeat: Infinity, ease: 'linear' },
    });
  };

  // Start the animation when the component mounts
  useEffect(() => {
    controls.start({
      x: '100%',
      transition: { duration: 5, repeat: Infinity, ease: 'linear' },
    });
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
    <motion.div
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
      initial={{ x: '-100%' }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      Your headline goes here!
    </motion.div>
  </div>
  )
}

export default Footer