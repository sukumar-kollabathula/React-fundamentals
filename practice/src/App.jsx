import Productcard from './Productcard.jsx'
function App() {

  const productName ="Soap"
  const cost = 40
  const Available = true

  return (
  <>
    <Productcard product={productName} price={cost} isAvailable={Available}/>
  </>

)
}

export default App
