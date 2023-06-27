import { Link, useNavigate } from "react-router-dom";
function Navi() {
  const navi = useNavigate();
  const onClick = () => {
    navi("/about");
  };

  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/user"}>User</Link>
        </li>
        <li>
          {/* <button onClick={onClick}>Redirect</button> */}
          <Link to={"/redirect"}>Redirect</Link>
        </li>
        <li>
            <Link to={}></Link>
        </li>
      </ul>
    </>
  );
}
