import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Book from './Book.jsx';

function App() {
  return(
    //use a fragement to hold multiple components
    <>
      <Header />
      <Book />
      <Book />
      <Footer />
    </>
  );
}

export default App;
