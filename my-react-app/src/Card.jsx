import profilepic from './assets/github.png'

export const Card = () => {
  return (
    <>
    <div className="card">
        <img className='card-image' src={profilepic} alt='profilepic'></img>
        <h2 className='card-title'>EMran</h2>
        <p className='card-text'>I am a seeker</p>
    </div>
    </>
  )
}
 