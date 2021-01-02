
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
// import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ContainerOne from './Component/body/ContainerOne';
import Nav from './Component/Header/NavBar';




function App() {
  return (
    <div className="App">
        <Nav/>
        <body>
          <section className="section1">
        <ContainerOne/>
        <ProfilPhoto/>
        </section>
        <Address/>
      
        </body>
    </div>
  );
}

export default App;
