import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'

 const GrandChild = () => {

  let contextValue = useContext(MyContext)

  console.log(contextValue)
  return (

    <div>

    <h1>This is the : {contextValue[0] }</h1>
    <button onClick={()=> {contextValue[1](++contextValue[0])}}>Increment</button>
    <button onClick={()=> {

      if(contextValue[0] == 0 ){
        alert("Cannot Be decreased more then 0")
      }else{
         contextValue[1](--contextValue[0])
      }
      }}>Decrement</button>
    </div>
  )
}

export default GrandChild
