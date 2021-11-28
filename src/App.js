
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import Checkout from './components/checkout/Checkout'
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
