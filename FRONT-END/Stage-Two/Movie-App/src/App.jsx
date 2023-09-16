import Homepage from "./Pages/HomePage/Homepage"
import { Outlet } from "react-router-dom"


function App() {


return (
  <>
    <Homepage></Homepage>

    <Outlet></Outlet>
  </>
)
}

export default App
