import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/List/AccommodationList';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting/Hosting';
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
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/management" element={<Management />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
