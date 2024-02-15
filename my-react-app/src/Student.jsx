
import Proptypes from 'prop-types'
export const Student = (prop) => {
    const obj = {
        name: 'Emran',
        mail: "emrn@gmail.com",
        idol: 'Muhammad SW'
    }
    let ob = prop;

  return (
    <>
    <h1>Name: {ob.name}</h1>
    <p>Mail: {ob.mail}</p>
    <p>Idiology: {ob.idol}</p>
    </>
    )
}
Student.propTypes = {
    name: Proptypes.string,
    mail: Proptypes.string,
    idol: Proptypes.string
}
Student.defaultProps ={
    name: 'Emran',
    mail: "emrn@gmail.com",
    idol: 'Muhammad SW'
}