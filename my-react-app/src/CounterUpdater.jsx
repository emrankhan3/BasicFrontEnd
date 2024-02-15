import { useState } from "react"

export const CounterUpdater = () => {

    const [value,setValue] = useState(0)
    let inc = ()=>{
        setValue(i=>i+1)
    }
    let dec = ()=>{
        setValue(i=>i-1)
    }
    let res = ()=>{
        setValue(0)
    }
  return (
    <>

        <div>
            <h2>{value}</h2>
        </div>
        <div>

            <button onClick={inc}>Increment</button>
        </div>
        <div>
            <button onClick={dec}>Decrement</button>
        </div>
        <div>
            <button onClick={res}>Reset</button>
        </div>
    
    </>
  
    )
}
