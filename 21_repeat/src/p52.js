import "./App.css";
import { useState } from "react";

function P52() {
  const [names, setNames] = useState([]);
  const [titles, setTitles] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");

  const [nextId, setNextId] = useState([]); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputName(e.target.value);
  const onChange2 = (e) => setInputTitle(e.target.value);
  const onClick = () => {
    const nextId = nextId.concat({
      id: nextId,
    });
    const nextNames = names.concat({
      id: nextId,
      text: inputName,
    });
    const nextTitles = titles.concat({
      id: nextId,
      text: inputTitle,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setTitles(nextTitles);
    setInputName("");
    setInputTitle("");
  };

  //   const onRemove = (id) => {
  //     const nextNames = names.filter((name) => name.id !== id);
  //     setNames(nextNames);
  //     const nextEmails = emails.filter((emails) => emails.id !== id);
  //     setEmails(nextEmails);
  //   };

  const idList = nextId.map((nextId) => <tr key={nextId.id}>{nextId.id}</tr>);
  const namesList = names.map((name) => <tr key={name.id}>{name.text}</tr>);
  const TitleList = titles.map((titles) => (
    <tr key={titles.id}>{titles.text}</tr>
  ));
  return (
    <>
      <fieldset>
        작성자:{" "}
        <input
          placeholder="작성자"
          value={inputName}
          onChange={onChange}
        ></input>
        제목:{" "}
        <input
          placeholder="제목"
          value={inputTitle}
          onChange={onChange2}
        ></input>
        <button onClick={onClick}>작성</button>
      </fieldset>
      <table border="1">
        <tr>
          <td className="title">번호</td>
          <td className="title">제목</td>
          <td className="title">작성자</td>
        </tr>
        <tr>
          <td className="title">{idList}</td>
          <td className="title">{namesList}</td>
          <td className="title">{TitleList}</td>
        </tr>
      </table>
    </>
  );
}
export default P52;
