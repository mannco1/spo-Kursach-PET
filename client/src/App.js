
import './components/css/App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import MusicPage from './pages/MusicPage.jsx';
import Error404 from './pages/Error404.jsx';
import Bands from './pages/Bands.jsx';
import DetailPage from './pages/detailPage.jsx';
import DetailBands from './pages/detailBands.jsx';
import Terms from './pages/Terms.jsx';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/music" element={<MusicPage/>} />
        <Route path="/bands" element={<Bands/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
        <Route path="/detailbands/:id" element={<DetailBands/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route  path="*" element={<Error404/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
