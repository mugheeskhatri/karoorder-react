import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './config/AppRouter';
import { Provider } from 'react-redux'
import store from './store';
import './components/navbar/Navbar.css'
import './components/slider/Slider.css'
import './components/topCard/topCard.css'
import './components/card/Card.css'
import './components/Cart/Cart.css'
import './layout/Shoes/Shoes.css';
import './screens/Checkout/checkout.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}


export default App;
