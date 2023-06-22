import { useState, useRef } from "react";

function P54() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [resultComment, setResultComment] = useState([]);

  const inputRef = useRef();

  const addComment = () => {
    const newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    if (inputWriter === "") {
      inputRef.current.focus();
    } else {
      setComment([...comment, newComment]);
      setInputWriter("");
      setInputTitle("");
    }
  };

  const searchComment = () => {
    const result = comment.filter((value) => {
      //   console.log(value);
      console.log(value[searchType]);
      //   console.log(value[searchType].includes(inputSearch));
      if (!value[searchType].includes(inputSearch)) {
        return null;
      }
      return value;
    });
    //console.log(result);
    setResultComment(result);
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          ref={inputRef}
          id="writer"
          type="text"
          placeholder="작성자"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          placeholder="제목"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
      <hr />
      <form>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
      <hr />
      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h4>검색결과</h4>
      {resultComment.length > 0 && (
        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {resultComment.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default P54;
