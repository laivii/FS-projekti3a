function NewComment() {
  return (
    <>
      <h2>New Comment</h2>
      <div className="container">
        <form class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              name="username"
              class="form-control"
              id="inputUsername"
              placeholder="Username"
            ></input>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              name="country"
              class="form-control"
              id="inputCountry"
              placeholder="Country"
            ></input>
          </div>
          <div class="col-12">
            <input
              type="text"
              name="your-comment"
              class="form-control"
              id="inputMessage"
              placeholder="Write your comment here..."
            ></input>
          </div>
          <div class="col-12">
            <button
              type="submit"
              name="submit-button"
              class="btn btn-secondary"
              id="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewComment;
