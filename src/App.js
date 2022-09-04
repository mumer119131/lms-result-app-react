import Header from "./components/header/Header";
import Description from "./components/description/Description";
import Search from "./components/search/Search";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <Description />
      <Search />
    </>
  );
}

export default App;
