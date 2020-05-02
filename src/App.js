import React from 'react';
import Header from './Components/Header';
import Gallery from './Components/Gallery';
import Cards from './Components/cards';
import BigSection from './Components/bigCards';
import Footer from './Components/footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Header />
          <Switch>
              <Route path = "/" exact component={Gallery} />
              <Route path = "/cards" component={Cards} />
              <Route path = "/bigcards" component={BigSection} />
          </Switch>
          {/* <Cards />
          <BigSection /> */}
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
