import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import About from './Aboutus';
import Footer from './Footer'; 
import Why from './Whyus';
import Service from './Service';
import Form from './FormSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Why/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;
