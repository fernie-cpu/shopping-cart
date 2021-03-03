import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import { ProductProvider } from './components/ProductProvider';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Odin from './components/Odin';

function App() {
  return (
    <ProductProvider>
      <div className='App'>
        <BrowserRouter>
          <Header />

          <section>
            <Switch>
              <Route exact path='/shopping-cart' component={Home} />
              <Route exact path='/shopping-cart/shop' component={Products} />
              <Route
                path='/shopping-cart/shop/:id'
                component={ProductDetails}
              />
              <Route path='/shopping-cart/cart' component={Cart}></Route>
              <Route path='/shopping-cart/odin' component={Odin} />
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;
