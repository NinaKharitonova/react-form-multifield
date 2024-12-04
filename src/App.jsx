import { useState } from "react";

function App() {
  const [titleSection, useTitleSection] = useState("");
  const [articleList, setArticleList] = useState([]);

  const formPostSubmit = (e) => {
    e.preventDefault();

    if (!titleSection) return;

    const newArticle = {
      title: titleSection,
    };

    const newArticleList = [...articleList, newArticle];
    setArticleList(newArticleList);
    useTitleSection("");
  };

  const titleCange = (e) => {
    useTitleSection(e.target.value);
  };

  const deletePost = (deleteIndex) => {
    const newArticleListButton = articleList.filter(
      (article, articleIndex) => articleIndex !== deleteIndex
    );
    setArticleList(newArticleListButton);
  };

  return (
    <>
      <div className="container">
        <section className="py-3">
          <form onSubmit={formPostSubmit}>
            <h2>My blog</h2>
            <div className="row">
              <div className="col-4">
                <label className="form-label" htmlFor="post-title">
                  Title
                </label>
                <input
                  value={titleSection}
                  onChange={titleCange}
                  type="text"
                  className="form-controll mb-2"
                  id="post-title"
                />
              </div>
              <div className="col-12 py-2">
                <button className="btn btn-success">Create a new post</button>
              </div>
            </div>
          </form>
        </section>

        <section className="py-3">
          <h4>Post List</h4>
          <div className="row ">
            {articleList.length ? (
              articleList.map((article, index) => (
                <div key={index} className="col-6 py-3">
                  <div className="card">
                    <button
                      onClick={() => deletePost(index)}
                      type="button"
                      className="btn-close"
                    ></button>
                    <div className="card-body">
                      <h5>{article.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-6">
                <h3>No printed posts</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
