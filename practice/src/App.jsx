
import { useState } from "react"
import ButtonClick from "./ButtonClick"
function App() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [count,setCount] =useState(0)
  const handleIncrement=()=>{
    setCount((prev)=>prev+1)
    
  }
  const handleEmailChange=(event)=>{
    setEmail(event.target.value)
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value)
  }  
  function handleClick(name){
    console.log("button clicked",name)
    console.log(name);
  } 
  const handleSubmit=(event)=>{
    alert(`email:${email} password:${password}`)
    event.preventDefault()
    console.log(email);
    console.log(password);
  }
  const handleChange =(event)=>{
    console.log(event.target.value)
     console.log(event.target.name)
  }

  

   return(
  <div>
    {<form onSubmit={handleSubmit}>
      <input type="email" placeholder="email" value={email} onChange={handleEmailChange}/>
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}/>
      <button type="submit">Submit</button>
    </form>}
    <p>Count:{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    
  </div>
)

}

export default App      
