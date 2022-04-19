import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
