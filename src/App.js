import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from './Components';
import {Home, Blogs, About, Login, NoPage} from './Pages';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="About" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
