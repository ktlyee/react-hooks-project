import React from 'react'
import './App.css';
import Reviews from './components/Reviews'

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1 className="title">Our Reviews</h1>
        <div className="underline"></div>
        <Reviews/>
      </section>
    </div>
  );
}

export default App;
