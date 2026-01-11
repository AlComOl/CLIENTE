// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//     <h1>{course}</h1>
//     <p>{part1.name} {part1.exercises}</p>
//     <p>{part2.name} {part2.exercises}</p>
//     <p>{part3.name} {part3.exercises}</p>
//     </div>
//   )
// }


//1.4


const Header = (props) =>{
  
  return(
  <h1>{props.course}</h1>
  )
}



const Content = (props) =>{
  return(
    <ul>
      <li>{props.parts.part1.name} {props.parts.part1.exercises}</li>
      <li>{props.parts.part2.name} {props.parts.part2.exercises}</li>
      <li>{props.parts.part3.name} {props.parts.part3.exercises}</li>
    </ul>
  
  );

}

const Total = (props) => {
  const total= props.parts.part1.exercises+props.parts.part2.exercises+props.parts.part3.exercises;
  return(

  <ul>
    <li>Total exercices {total}</li>
  </ul>
  )
}
 


const App = () => {
  const course = 'Half Stack application development'

  const parts = {

    part1:{
      name: 'Fundamentals of React',
      exercises: 10
    },
    part2:{
      name: 'Using props to pass data',
      exercises: 7
    },
    part3:{
      name: 'State of a component',
      exercises: 14
    }
  }

  return (
    <div>
      <Header course={course}/>
      <Content parts ={parts}/>
      <Total parts={parts}/>
      
    </div>
  )
}





export default App