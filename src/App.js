import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Hosting from './pages/Hosting/Hosting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/hosting" element={<Hosting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
