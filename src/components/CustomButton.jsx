import { useSnapshot } from 'valtio'
import state from '../store'

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state)

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: snap.color,
        color: '#fff',
      }
    } else if (type === 'outline') {
      return {
        backgroundColor: 'black',
        color: 'white',
      }
    }
  }

  return (
    <button
      className={`px-2 py-2 flex-1 rounded-md ${customStyles} bg-red-200 max-h-12`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
