import { Square } from '@mui/icons-material';
import './pages/css/App.css'
import Home from "./pages/Home.jsx";
import Slider from "./pages/Slider.jsx";
import SquareForms from './pages/SquareForms.jsx';
import SquareFormsPaginator from './pages/SquareFormsPaginator.jsx';
import MyPagination from './pages/MyPagination.jsx';


function App() {
  return (
    <div className='glavniy'style={{ backgroundColor: '#000000', height: "100vw", }}>
    <div className='container' style={{alignContent:'center'}}> 
      <Home/>
      <Slider/>
      <SquareFormsPaginator/>

      <MyPagination/>
    </div>
    </div>
  );
}

export default App;
