import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/List/AccommodationList';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting/Hosting';
import Hosting2 from './pages/Hosting/Hosting2';
import Hosting3 from './pages/Hosting/Hosting3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list/:localName" element={<AccommodationList />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/hosting/2" element={<Hosting2 />} />
        <Route path="/hosting/3" element={<Hosting3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
