import "./id.css"
function ID(id){
    const style_id = {color : "black", border: "1px" }
    return(
            <div className="hi">
                <img src="./1.jpg" alt="eswar"className="photo" />
               <div><p style={style_id}>Name:{id.name}</p>
                <p>Rollnumber :{id.rollnumber}</p>
                <p>Course :{id.course}</p>
                <p>Bloodgroup :{id.Bloodgroup}</p>
                <p>DOB :{id.DOB}</p>
                </div> 
            </div>
    )
}
export default ID