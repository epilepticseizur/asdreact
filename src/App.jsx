import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   const [item, setItem] = useState([])
//   const [text, setText] = useState("")


//   const addItem = () => {
//     setItem([...item, text])
//     setText("")
//   }
//   const removeItem = (index) => {
//     const newItem = [...item]
//     newItem.splice(index, 1)
//     setItem(newItem)
//   }


//   return (
//     <div className="return">
//       <input type="text" onChange={(e) => setText(e.target.value)} />
//       <button onClick={addItem}>add</button>
//       {item.map((item, index) => (
//         <p key={index}>
//           {item}
//           <button onClick={() => removeItem(index)}>remove</button>
//         </p>
//       ))}
//     </div>
//   )

// }



function App(){
  const [time, setTime] = useState(0)
  const [on, setOn] = useState(false)


  useEffect(() => {
    if (!on) return
    const interval = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [on])

  return(
    <div className="return">
      <p>{time} s</p>
      <button onClick={() => setOn(true)}>star</button>
      <button onClick={() => setOn(false)}>stop</button>
    </div>
  )
}
export default App
