import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Map } from './components/Map/Map';
import { BasketCard } from './components/BasketCard/BasketCard';
import { HomePage } from './Pages/HomePage';

import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;