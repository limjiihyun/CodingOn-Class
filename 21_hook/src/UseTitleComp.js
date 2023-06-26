import { useEffect, useState } from "react";

const useTitle = (init) => {
  const [title, setTitle] = useState(init);

  useEffect(() => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }, [title]);

  return setTitle;
};

const UseTitleComp = () => {
  const title = useTitle("제목이 뭘까요?");
  setTimeout(() => title("여기는 메인페이지입니다."), 3000);

  return (
    <>
      <div>Use Title</div>
    </>
  );
};

export default UseTitleComp;
