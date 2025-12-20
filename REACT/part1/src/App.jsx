 const App = () => {
 const course = 'Half Stack application development' 
 const part1 = 'Fundamentals of React'
 const exercices1=10
 const part2 ='Using props to pass data'
 const exercices2= 7
 const part3='State of a component'
 const exercices3=14
 
 return (
  <div>
    <Header course={course}/>    
    <Content/>
    <Part1 part1={part1} exercices1={exercices1}/>
    <Part2 part2={part2} exercices2={exercices2}/>
    <Part3  part3={part3} exercices3={exercices3}/>
      <Total  exercices1={exercices1} exercices2={exercices2} exercices3={exercices3} />
  </div>
 )

  }



const Header=(props)=>{
  console.log(props)
 
   return(
  <h1>{props.course}</h1>
   )

} 

const Content=(props)=>{
  console.log(props)

  return(
    <div>
 
   {/* <Part1 part1={part1} exercices1={exercices1}/>
 
   <Part2 part2/>
  
   <Part3 part3/> */}
  </div>
   )
}


const Total=(props)=>{
console.log(props)
  return(

    <p>Number od exercises {props.exercices1+props.exercices2+props.exercices3}</p>

  )
}

const Part1=(props)=>{
  console.log(props)
  return (
   <p>{props.part1}</p> 
  )
      
}
const Part2=(props)=>{
  console.log(props)
  return (
   <p>{props.part2}</p>
  )
      
}
const Part3=(props)=>{
  console.log(props)
  return (
    <p>{props.part3}</p>
  )
      
}
 
 
 

export default App


