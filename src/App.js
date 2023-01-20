import './App.css';
import { Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import PageHome from './components/pageHome/PageHome';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<PageHome/>}/>
      <Route path='/' element = {<Main/>}/>
      <Route path='/' element = {<Footer/>}/>
    </Routes>
    </>
  );
}

export default App;
