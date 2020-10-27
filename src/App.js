import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './Aboutus';
import Footer from './Footer'; 
import Why from './Whyus';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Why/>
      <Footer/>

    </div>
  );
}

export default App;
