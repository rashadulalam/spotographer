import {Routes, Route} from 'react-router-dom';
import {Header, Footer} from './Components';
import {Home, Blogs, About, Login, NoPage} from './Pages';

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route Path="/about" element={<About />} />
          <Route Path="/blog" element={<Blogs />} />
          <Route Path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
