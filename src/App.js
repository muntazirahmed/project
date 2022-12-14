import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home/Home';
import List from './List/List';
import Hotel from './Hotel/Hotel';






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/hotels" element={<List/>}/>
      <Route path ="/hotels/:id" element={<Hotel/>}/>
    </Routes>
    
    </BrowserRouter>
 
  )
}

export default App;
