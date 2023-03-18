import React from 'react'
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <div className='mainContent'>
      <Nav/>
      <Main/>
    </div>
      <Footer/>
    </>
  );
}

export default App;