import { useState } from "react"

export const MyComponents = () => {
    const [name,setName] = useState('emran')
    const [category,setCategory] = useState('mula')
    const [price, setPrice] = useState(0)
    const [comment,setComment] = useState('')
    const prices = {
        'Fruits':60,
        'Vegetables':30,
        'Meats':150,
        'Fish':70
    }
    let nameChange = (e)=>{
        setName(e.target.value)
    }
    let categoryChange = (e)=>{
        setCategory(e.target.value)
        setPrice(prices[e.target.value])
    }
    let commentChange = (e)=>{
        setComment(e.target.value)
    }


    return (
        <>
        <div>
            <h1>Hello {name}</h1>
            <input id='inputName' type='text' onChange={(e)=>nameChange(e)} />
        </div>
        <div>
            <h1>Category: {category}</h1>
            <select id='selectCategory' onChange={(e)=>{categoryChange(e)}}>
                <option>Fruits</option>
                <option>Vegetables</option>
                <option>Meats</option>
                <option>Fish</option>
            </select>
        </div>

        <div>
            <h3>Price: {price}</h3>
        </div>

        <div>
            <input id='commne43t' onChange={(e)=>{commentChange(e)}} />
            <h3>Comment: {comment}</h3>
        </div>

        </>
    )
}
