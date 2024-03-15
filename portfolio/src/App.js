import React from 'react'
import {Footer, Blog, Available, Services, Header, Features} from './containers';
import {CTA, Navbar} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App = () => {
  return (
    <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />  
          </div>
          <Available />
          <Services />
          <Features />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}
export default App