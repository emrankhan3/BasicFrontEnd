import { useState } from "react"

export const SM = () => {

    const [name,setName] = useState('emran')

     function fun(){
        if (name=='emran')setName('Muhammad')
        if (name=='Muhammad')setName('emran')
    }
    return (
    <div>
        <h1>Hello {name}</h1>
        <button onClick={()=>fun()}  > Click Me</button>
    </div>
  )
}
