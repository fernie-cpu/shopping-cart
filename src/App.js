import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import { ProductProvider } from './components/ProductProvider';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  return (
    <ProductProvider>
      <div className='App'>
        <BrowserRouter>
          <Header />

          <section>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/shop' component={Products} />
              <Route path='/shop/:id' component={ProductDetails} />
              <Route path='/cart' component={Cart} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    </ProductProvider>
  );
}

export default App;
