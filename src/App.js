
import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import SearchFilter from './components/SearchFilter';
import Accordion from './components/Accordion';
import List from './components/List';
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';

function App() {
  return (
    <>


      <div >
        <h1 style={{color: "brown"}}>Welcome to AppsTec</h1>
        <nav className='navMenu'>
          <Link to="/accordion">Accordion</Link>  <br /> <br />
          <Link to="/counter">Counter</Link><br /> <br />
          <Link to="/search">Search Filter</Link> <br /> <br />
          <Link to="/list">List</Link> <br /> <br />
          <Link to="/image">Image Slider</Link>

        </nav>

      </div>


      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/search' element={<SearchFilter />} />
          <Route path='/accordion' element={<Accordion />} />
          <Route path='/image' element={<ImageSlider />} />
        </Routes>

      </div>





    </>
  );
}

export default App;
