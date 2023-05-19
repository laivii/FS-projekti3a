//Components
import Header from "./components/Header/Header";
import NewComment from "./components/NewComment/NewComment";
import Search from "./components/Search/Search";
import Cards from "./components/CommentCards/CommentCard";

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
