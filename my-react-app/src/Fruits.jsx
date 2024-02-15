function Fruit(prop){
   
   let li = prop.list
   

    let listItems = li.map(item => <li key={item.id} >{item.name} {item.cal} </li>)
    return(
        <>
            <h2>{prop.category}</h2>
            {listItems}
        </>
    )
}

export default Fruit