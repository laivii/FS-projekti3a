//Components
import Header from "./components/Header";
import NewComment from "./components/NewComment";
import Search from "./components/Search";
import Cards from "./components/CommentCard";

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
      <div className="container" id="forum"></div>
      <Cards />
    </>
  );
}

export default App;
