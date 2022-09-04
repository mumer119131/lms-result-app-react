import Header from "./components/header/Header";
import Description from "./components/description/Description";
import Search from "./components/search/Search";
import Loading from "./components/loading/Loading";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <Description />
      <Search />
      <Footer />
    </>
  );
}

export default App;
