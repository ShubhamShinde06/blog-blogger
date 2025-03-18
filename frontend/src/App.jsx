import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Tech from './pages/Tech';
import Politics from './pages/Politics';
import Entertainment from './pages/Entertainment';
import Finance from './pages/Finance';
import Music from './pages/Music';
import Life from './pages/Life';
import Blog from './pages/Blog';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return(
    <div className='w-full bg-black'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/tech' element={<Tech/>} />
        <Route path='/politics' element={<Politics/>} />
        <Route path='/entertainment' element={<Entertainment/>} />
        <Route path='/finance' element={<Finance/>} />
        <Route path='/music' element={<Music/>} />
        <Route path='/life' element={<Life/>} />
        <Route path='/blog/:blogId' element={<Blog/>} />
      </Routes>
    </div>
  )
}

export default App
