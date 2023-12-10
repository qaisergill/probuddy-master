
import Home from './home';
import Services from './services';
import About from './about';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Contact from './contact';
import Header from './components/header';
import Footer from './components/footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyles';
import Login from './components/login';
import Signup from "./components/signup"





function App() {
  const theme ={
    colors:{
      heading:"#000000",
      text:"#000000",
      white:"#fff",
      black:"#212529",
      helper:"#058B8C",
      bg:"#F5F5F5",


    },
    media:{mobile: "768px", tab: "998px"},
  }
  return (
    <ThemeProvider theme={theme} >
    <GlobalStyle/>
    <BrowserRouter>

    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/signup' element={<Signup />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
