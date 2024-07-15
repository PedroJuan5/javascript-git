
import Banner from "./Components/banner"
import Card from "./Components/card"
import Header from "./Components/Header"


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Banner />
      
        <main className="container">
          <h3 className="mt-3 mb-3">Bem vindo ao meu site</h3>
          <Card />
          <p className="mt-3 mb-3"></p>
        </main>
      </div>
    </>
  )
}

export default App
