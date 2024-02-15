import { useState } from "react"

export const Counter = () => {
    
    const [count, setCount] = useState(0)
    
    function Start(){
        let time = new Date().getTime()
        while(new Date().getTime() - time <30){
            setCount((count) => count + 1)
        }
    }

    return (
    <>
        <h3>{count}</h3>
        <button onClick={Start}>Start</button>
        <button onClick={Pause}>Pause</button>
        <button onClick={Stop}>Stop</button>
        <button onClick={Reset}>Reset</button>
    </>
  )
}
