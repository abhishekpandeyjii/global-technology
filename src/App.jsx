import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
