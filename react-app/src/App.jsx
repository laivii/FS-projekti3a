//Components
import Header from "./components/Header";
import NewComment from "./components/NewComment";
import Search from "./components/Search";

//Main fuction
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <NewComment />
      </div>
      <div className="container">
        <Search />
      </div>
    </>
  );
}

export default App;
