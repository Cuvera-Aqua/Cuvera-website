import Navbar from './components/Navbar'
import Home from './pages/Home.tsx'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "70px" }}>
        <Home />
      </main>
    </>
  )
}

export default App