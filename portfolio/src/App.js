import React from 'react'
import {Footer, Blog , Possibility, Header, Features} from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';

export const App = () => {
  return (
    <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />  
          </div>
          <Brand />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}
export default App