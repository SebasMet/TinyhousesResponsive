import logo from './media/logo.png'
import tinyhouse from './media/tinyhouse1.jpg'
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

      <Banner
      head={"Titel"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      img={tinyhouse}
      >
      </Banner>
      <Banner
      head={"Titel"}
      text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
      img={tinyhouse}
      >
      </Banner>
      </>
  );
}

export default App;
