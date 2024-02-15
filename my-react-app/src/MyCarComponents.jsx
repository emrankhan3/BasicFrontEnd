import { useState } from "react"

export const MyCarComponents = () => {

    const [Car,setCar] = useState({
        brand:'',
        model:'',
        engine:'',
        price:0
    })
    let fun1=(event)=>{
        setCar(c=>({...c,brand:event.target.value}))
    }
    let fun2=(event)=>{
        setCar(c=>({...c,model:event.target.value}))
    }
    let fun3=(event)=>{
        setCar(c=>({...c,engine:event.target.value}))
    }
    let fun4=(event)=>{
        setCar(c=>({...c,price:event.target.value}))
    }
    // let fun1=(event)=>{
    //     setCar({
    //         brand:event.target.value,
    //         model:Car.model,
    //         engine:Car.engine,
    //         price:Car.price
    //     })
    // }
    // let fun2=(event)=>{
    //     setCar({
    //     model:event.target.value,
    //     brand:Car.brand,
    //     engine:Car.engine,
    //     price:Car.price
    //         })
    // }
    // let fun3=(event)=>{
    //     setCar({
    //     engine:event.target.value,
    //     model:Car.model,
    //     brand:Car.brand,
    //     price:Car.price
    //         })
    // }
  
    return (
    <>
        <h2>Car Brand: {Car.brand}</h2>
        <h4>Engine: {Car.model}</h4>
        <p>Model: {Car.engine}</p>
        <p>Price: {Car.price}</p>
        
        <input type='text' onChange={fun1} />
        <input type='text' onChange={fun2} />
        <input type='text' onChange={fun3} />
        <input type='Number' onChange={fun4} />
        
        

    </>
  )
}
