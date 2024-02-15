import styles from './Button.module.css';
export const Button = () => {
  let fun = (e)=>{
    console.log(`${name} you clicked me`)
    console.log(e);
  }
  return (
    
    <>
    <button onClick={(e)=>fun(e)} className={styles.button} > Click Me</button>
    </>
  )
}
