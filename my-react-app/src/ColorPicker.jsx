import { useState } from "react"

export const ColorPicker = () => {
    
    const [color,setColor] = useState('red')

    let colChange = (event)=>{
        setColor(event.target.value)
    }

    return (
    <>
        <div style={{backgroundColor:color}}>

            <p>Select Color</p>

            <input type="color" onChange={colChange} />

        </div>
    </>

  )
}
