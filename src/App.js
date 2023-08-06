import './App.scss';
import About from './components/About';
import Custom from './components/Custom';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Header from './components/Header';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <>
      <Header></Header>
      {/* <Footer></Footer> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
//npm i react-router-dom
//npm install react-icons
//npm install firebase
//The images should be 332 by 245 px. Divide the number by 0.7225

//Colors:  brown #8C422D  purple #420B3B  white #FFFCF5  orange #FF8B2C


//v029 3 Aug 2023 2:03 pm: I had to do a git pull (likely because I manually updated the README on 30 May). Today I am working on changing it to a mobile-first website
//v030 4 Aug 11 pm: continue working on mobile version
//v031 5 Aug 10:46 am: mobile home page not tall enough, so elements are falling off the page
//v032 9:52 pm: footer is not fixed, things are still going off page.
//v033 6 Aug 5:04 pm: no tutorial seems to be working, revert back and try something else