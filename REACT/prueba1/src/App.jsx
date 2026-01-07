
const Hijo = (props) =>{
  return(
    <p>Soy el hijo de APP {props.name} {props.apellido}</p>
    
  )
}

const App = () => {
const  name1 = 'Luis'
 const name2='Jose'
 const name3 = 'Pepe'

  return (
    <div>
      <p>Hello world</p>
      < Hijo  name='Alvaro'/>
      < Hijo  name={name2} apellido='Amoros'/>
      < Hijo  name={name3} apellido='Amoros'/>
    </div>
    
  )
}


export default App