import React, { useState } from 'react'


const App = () => {
  const [value, setValue] = useState(5)
  console.log(value)



  return (
    <div>
      {value}
      <button onClick={() => setValue(0)}>button</button>

    </div>
 
  )
}

export default App