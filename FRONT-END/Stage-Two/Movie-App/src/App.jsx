import Homepage from "./Pages/Home/Homepage"
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
