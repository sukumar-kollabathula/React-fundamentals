function Profile() {
    const name = "Sukumar"
    const age = 20
    const isStudent = true
  return (
    <div>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>isStudent:{isStudent===true?"i am student":"i am not a student"}</p>
    </div>
  )
}
export default Profile