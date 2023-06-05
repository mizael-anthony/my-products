import { useEffect, useRef, useState } from "react"

function Counter({children}) {
  const timer = useRef(0)
  const [count, setCount] = useState(0)

  const increment = (e) => {
    setCount(count => count + 1)
  }

  const pause = () => {
    clearInterval(timer.current)
    timer.current = 0
  }

  const play = () => {
    timer.current = setInterval(()=>{setCount((count) => count + 4)}, 1000)
  }

  const click = () => {
    return timer.current === 0 ? play() : pause()

  }


  useEffect(()=>{
    timer.current = setInterval(()=>{setCount((count) => count + 4)}, 1000)
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  console.log('render')

  return (
    <div>
        Compteur :<span>{count}</span>
        <p>{children}</p>
        <button className="btn btn-primary" onClick={increment}>Incrementer</button>
        <button className="btn btn-danger" onClick={click}>Click</button>
    </div>
  )
}

export default Counter
