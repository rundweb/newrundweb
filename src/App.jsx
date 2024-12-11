import HomeComponents from "./components/HomeComponents"
import NavbarComponents from "./components/NavbarComponents"

const App = () => {
  return (
    <main className="overflow-hidden relative p-6 w-screen h-full">
      <NavbarComponents/>
      <HomeComponents/>
    </main>
  )
}

export default App
