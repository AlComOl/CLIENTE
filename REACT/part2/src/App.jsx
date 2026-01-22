import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
   const [notes, setNotes] = useState(props.notes)
     const [newNote, setNewNote] = useState(
    'a new note...')

   const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note=>
            <Note  key={note.id} note={note}/>
          )}
      </ul>
       <form onSubmit={addNote}>
            <input value={newNote}  onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}






// const Note=({note})=>{
//   return(
//     <li >{note.content}</li>
//   )
// }



//Ejercicio 2.1

// const Header = ({course})=>{
// return (
//   <h1>{course.name}</h1>
// )
// }

// const Part1 = ({course}) =>{
//   return(
//   <h3>{course.parts[0].name} {course.parts[0].exercises}</h3>
//   )
// }

// const Part2 = ({course}) =>{
//   return(
//   <h3>{course.parts[1].name} {course.parts[1].exercises}</h3>
//   )
// }

// const Part3 = ({course}) =>{
//    return(
//    <h3>{course.parts[2].name} {course.parts[2].exercises}</h3>
//    )
//  }

//  const Total = ({course}) => {

//   // const total= course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises ;
 
//   const total = course.parts.reduce((a,c)=>{

//     return a+c.exercises
//   })
   
//   return(
//     <h3><strong>Total of {total} exercices</strong></h3>
//   )

//  }

// const Content = ({course}) =>{
//   return(

//     <div>
//       <Part1 course={course}/>
//       <Part2 course={course}/>
//       <Part3 course={course}/>
//       <Total course={course}/>
//     </div>

//   )
// }
 

// const Course = ({course}) =>{
//   return(
//     <div>
//       <Header course={course}/>
//       <Content course={course}/>

//     </div>
 
//   );


// }


// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       }
//     ]
//   }

//   return <Course course={course} />
// }
//Ejericicio 2.4

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   return (
    // <div>
    //   <h1></h1>
    //   <h2>{courses[0].name}</h2>
    //   <h3>{courses[0].parts[0].name} {courses[0].parts[0].exercises}</h3>
    //   <h3>{courses[0].parts[1].name} {courses[0].parts[1].exercises}</h3>
    //   <h3>{courses[0].parts[2].name} {courses[0].parts[2].exercises}</h3>
    //   <h3>{courses[0].parts[3].name} {courses[0].parts[3].exercises}</h3>
    //   <h3>total of {courses[0].parts.reduce((a,c)=>{return a+c.exercises},0)} exercices </h3>
    //   <h3><strong>{courses[1].name}</strong></h3>
    //   <h3>{courses[1].parts[0].name} {courses[1].parts[0].exercises}</h3>
    //   <h3>{courses[1].parts[1].name} {courses[1].parts[1].exercises}</h3>
    //   <h3>total of {courses[1].parts.reduce((a,c)=>{return a+c.exercises},0)} exercices </h3>
    // </div>

  //   <div>
  //     <h1><strong>Web development couriculum</strong> development couriculum</h1>
  //      {courses.map(course =>(
  //       <div key={course.id}>
  //         <h2>{course.name}</h2>
  //         {course.parts.map(part=>(
  //             <p key={part.id}><strong>{part.name}</strong></p>
  //         ))}
  //       </div>
  //      ))}
  //   </div>

  // )}

  //B fomularios


// import Note from './components/Note'


// const App = ({ notes }) => {


//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
        
//           <Note key={note.id} note={note} />

          
//         )}      
// </ul>
//     </div>
//   )
// }

export default App 

