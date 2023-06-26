function Kakao() {
  const cliend_id = "e200f1193006b60988254a352d88310c";
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${cliend_id}&redirect_uri=${REDIRECT_URI}
    `;

  const onClickFunc = () => {
    window.location.href = url;
  };

  return (
    <>
      <img src="kakao_login_medium_narrow.png" onClick={onClickFunc}></img>
    </>
  );
}

export default Kakao;
