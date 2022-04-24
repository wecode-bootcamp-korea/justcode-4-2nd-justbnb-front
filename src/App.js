import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/List/AccommodationList';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting/Hosting';
import Hosting2 from './pages/Hosting/Hosting2';
import Hosting3 from './pages/Hosting/Hosting3';
import Hosting4 from './pages/Hosting/Hosting4';

import Hosting5 from './pages/Hosting/Hosting5';
import Hosting6 from './pages/Hosting/Hosting6';
import Hosting9 from './pages/Hosting/Hosting9';

import Footer from './components/Footer';
import Nav from './components/Nav/Nav';
import Management from './pages/Management/Management';
import Reservation from './pages/Reservation/Reservation';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/list/:localName" element={<AccommodationList />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hosting/" element={<Hosting />} />
        <Route path="/hosting/2" element={<Hosting2 />} />
        <Route path="/hosting/3" element={<Hosting3 />} />
        <Route path="/hosting/4" element={<Hosting4 />} />

        <Route path="/hosting/5" element={<Hosting5 />} />
        <Route path="/hosting/6" element={<Hosting6 />} />
        <Route path="/hosting/9" element={<Hosting9 />} />
        <Route path="/management" element={<Management />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
