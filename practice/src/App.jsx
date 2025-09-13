import "./App.css"
import ID from "./id"
function App() {
const name= "sukumar"
const rollnumber= "23VV1A0522"
const course="BTECH"
const Bloodgroup= "0+"
const DOB= "13-10-2005"
  return (
    <div className="container"> 
      <ID name={name} rollnumber={rollnumber} course={course} Bloodgroup={Bloodgroup} DOB={DOB}/>
    </div>

)
}

export default App
