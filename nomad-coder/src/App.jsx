import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Home from "./Routes/Home"
import Detail from "./Routes/Datail"

function App() {

  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App
