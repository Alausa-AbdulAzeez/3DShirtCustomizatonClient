import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import { motion } from 'framer-motion'

import state from '../store'
import { fadeAnimation } from '../config/motion'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <motion.div className='absolute left-full ml-3' {...fadeAnimation}>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => (state.color = color.hex)}
      />
    </motion.div>
  )
}

export default ColorPicker
