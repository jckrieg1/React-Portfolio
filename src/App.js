
import './App.scss';
import { Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Sidebar from './components/Sidebar';




function App() {
  return ( 
  <> 
   <div className="App" >
      <Sidebar />
      <div className="page" >
        <span className="tags top-tags">&lt;body&gt;</span>

        {/* <Outlet /> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<Home />} />  
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/Resume" element={<Resume />} /> 
     </Routes>

        <span className='tags bottom-tags'>&lt;/body&gt;
        <br />
        <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>

  

     {/* The word "index" breaks code --  why??? */}
     {/* <Route index element={<Home />} />  */}

   
  </>
  );
}

export default App;


