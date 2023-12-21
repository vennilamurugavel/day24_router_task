import Sidebar from "./components/Sidebar"
import Add1 from "./components/Add1"
import Pythoncourse from "./components/Pythoncourse"
import Fullstack from "./components/Fullstack"
import Cybercourse from "./components/Cybercourse"
import Datascience from "./components/Datascience"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return <>
  <BrowserRouter>
  <div id="wrapper">
      <Sidebar/>
      <Routes>
        <Route path="/add1" element={<Add1/>}/>
        <Route path="/pycourse" element={<Pythoncourse />}/>
        <Route path="/fullstackcourse" element={<Fullstack/>}/>
        <Route path="/cybercourse" element={<Cybercourse/>}/>
        <Route path="/datascience" element={<Datascience/>}/>
      </Routes>
  </div>
  </BrowserRouter>
  </>
}
export default App