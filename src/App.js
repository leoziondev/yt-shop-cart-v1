import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
}

export default App;
