import React, { useState } from "react";
function Prob() {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitlt, setInputTitle] = useState("");
  const [comment, setComment] = useState([]);
  const writerInputElem = useRef();
  const titleInputElem = useRef();

  //input 빈 값 검사
  const checkInput = () => {
    //input에 값이 없으면 해당 input focusing
    if (inputWriter.trim().length === 0) {
      writerInputElem.current.focus();
      return false;
    }
    if (inputTitlt.trim().length === 0) {
      titleInputElem.current.focus();
      return false;
    }
    return true;
  };

  const addComment = () => {
    if (!checkInput()) return;

    //comment 데이터 추가
    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitlt,
    };
    //1. concat
    const newComment = comment.concat(newData);
    setComment(newComment);

    //2. ...spread
    setComment([...comment, newData]);

    //input 창 초기화
    setInputWriter("");
    setInputTitle("");
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자 :</label>
        <input
          ref={writerInputElem}
          id="writer"
          type="text"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
        <br />
        <label htmlFor="title">제목 :</label>
        <input
          ref={titleInputElem}
          id="title"
          type="text"
          value={inputTitlt}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />
      </form>
      <hr />
      <table border={1} cellPadding={0}>
        <thead>
          <tr>
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
          </tr>
        </thead>
        <tbody>
          {comment.map((value) => {
            // value : {id : 1, writer: 00, title : xx}
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Prob;
