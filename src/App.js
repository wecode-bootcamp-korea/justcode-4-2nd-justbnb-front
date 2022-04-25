import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/List/AccommodationList';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting/Hosting';
import Hosting5 from './pages/Hosting/Hosting5';
import Management from './pages/Management/Management';
import Reservation from './pages/Reservation/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list/:localName" element={<AccommodationList />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hosting" element={<Hosting />} />

        <Route path="/hosting/5" element={<Hosting5 />} />
        <Route path="/management" element={<Management />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
