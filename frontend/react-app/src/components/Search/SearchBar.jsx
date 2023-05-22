import { MakeCards } from "../CommentCards/CommentCard";
//Komponentti hakukenttää varten

//Funktio tietokanta pyynnölle
function SearchComment() {
  var search = document.getElementById("searchInput");
  var searchValue = search.value;

  console.log(searchValue);

  var uri = "http://localhost:8080/api/username/" + searchValue;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", uri, false);

  xhttp.onreadystatechange = function () {
    var container = document.getElementById("forum");
    container.innerHTML = "";
    var data = JSON.parse(xhttp.response);

    console.log(data);

    var content = MakeCards(data);
    container.appendChild(content);
  };

  xhttp.send();

  search.value = "";
}

//Funktio hakukentän html:lle
function Search() {
  return (
    <>
      <h2>Search Comment</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          id="searchInput"
          className="form-control"
          placeholder="Search by name"
          aria-label="Search for comment by username"
        ></input>
        <button
          onClick={SearchComment}
          type="button"
          className="btn btn-secondary"
          id="search-button"
        >
          Search
        </button>
      </div>
    </>
  );
}

export default Search;
