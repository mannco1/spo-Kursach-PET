
import './components/css/App.css'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage.jsx';
import MusicPage from './pages/MusicPage.jsx';
import Error404 from './pages/Error404.jsx';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/music" element={<MusicPage/>} />
        <Route  path="*" element={<Error404/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
