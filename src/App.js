import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccommodationList from './pages/List/AccommodationList';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Hosting from './pages/Hosting/Hosting';
import Management from './pages/Management/Management';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list/:localName" element={<AccommodationList />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
