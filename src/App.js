// Import data
import {postings} from './postings'
// Import components
import "./App.css"
import Searchbar from "./Components/Searchbar"
import Directory from "./Components/Directory"
import Sidebar from "./Components/Sidebar"
import Gallery from "./Components/Gallery"

function App() {
  return (
    <div>
      <h1>mikeslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
      </div>
    </div>
  )
}

export default App
