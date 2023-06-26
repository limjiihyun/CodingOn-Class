import "../styles/P56.scss";
import styled from "../styles/Origin.module.css";

function P56() {
  return (
    <>
      <div className={`${styled.circle} ${styled.circle1}`}>
        <div className={`${styled.white}`}>
          <div className={`${styled.black}`}></div>
        </div>
      </div>

      <div className={`${styled.circle} ${styled.circle2}`}></div>
      <div className={`${styled.circle} ${styled.circle3}`}></div>
      <div className={`${styled.circle} ${styled.circle4}`}></div>
      <div className={`${styled.circle} ${styled.circle5}`}></div>

      <img src="pngwing.com.png" className={`${styled.grass}`}></img>
    </>
  );
}
export default P56;