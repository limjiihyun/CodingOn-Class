import { useState } from "react";
import "./App.css";

function Event_ex() {
  const [names, setNames] = useState([]);
  const [emails, setEmails] = useState([]);

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputName(e.target.value);
  const onChange2 = (e) => setInputEmail(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputName,
    });
    const nextEmails = emails.concat({
      id: nextId,
      text: inputEmail,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setEmails(nextEmails);
    setInputName("");
    setInputEmail("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
    const nextEmails = emails.filter((emails) => emails.id !== id);
    setEmails(nextEmails);
  };

  const namesList = names.map((name) => (
    <h4 key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}:
    </h4>
  ));
  const emilList = emails.map((emails) => (
    <h4 key={emails.id} onDoubleClick={() => onRemove(emails.id)}>
      {emails.text}
    </h4>
  ));
  return (
    <div>
      <input placeholder="이름" value={inputName} onChange={onChange}></input>
      <input
        placeholder="이메일"
        value={inputEmail}
        onChange={onChange2}
      ></input>
      <button onClick={onClick}>추가</button>

      <h4>
        <h4 className="float">{namesList}</h4>
        <h4 className="float">{emilList}</h4>
      </h4>
    </div>
  );
}
//   return (
//     <div>
//       <input placeholder="이름" value={inputName}></input>
//       <input placeholder="이메일" value={inputEmail}></input>
//       <button onClick={onClick}>등록</button>
//       <ul>
//             {namesList}: {emailList}
//         </ul>
//     </div>
//   );

export default Event_ex;
