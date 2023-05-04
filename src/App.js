import logo from './media/logo.png'
import './App.css';
import Banner from './components/Banner';



function App() {
  return (
    <>

      <div id="menubar">
        <div id="logo">
          <img id="logo-image" src={logo} alt="Tiny houses logo"></img>
        </div>
      </div >

      <div id='image-container'>
      </div>

      <Banner>
        
      </Banner>
      </>
  );
}

export default App;
