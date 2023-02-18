import {Routes, Route} from 'react-router-dom';
import {Header, Footer} from './Components';
import {Home, Blogs, About, Login, NoPage} from './Pages';

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
