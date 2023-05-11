import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App-body" id="App-body">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksContainer />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
