
function Greeting (prop)  {
    const welcomeMessage = <h2 className='welcome'>Assalamualaikum</h2>
    const logginMessage = <h2 className='login'>Login First</h2>
    return (    
        prop.isLoggedIn? welcomeMessage : logginMessage
            )

  
}
export default Greeting