//Komponentti formiin, jolla luodaan uusikommentti

function NewComment() {
  return (
    <>
      <h2>New Comment</h2>
      <div className="container">
        <form
          class="row g-3"
          action="http://localhost:8080/api/add"
          method="post"
        >
          <div class="col-md-6">
            <input
              type="text"
              name="username"
              class="form-control"
              id="inputUsername"
              autoComplete="username"
              placeholder="Username"
            ></input>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              name="country"
              class="form-control"
              id="inputCountry"
              autoComplete="country"
              placeholder="Country"
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              name="comment"
              class="form-control"
              id="inputMessage"
              placeholder="Write your comment here..."
            ></input>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-secondary" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewComment;
