import { useEffect } from "react";
import axios from "axios";

function KakaoLogin() {
  const cliend_id = "e200f1193006b60988254a352d88310c";
  const REDIRECT_URI = "http://localhost:3000/oauth";

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      headers: "Content-Type: application/x-www-form-urlencoded",
      data: {
        grant_type: "authorization_code",
        cliend_id,
        REDIRECT_URI,
        code: "COCFUKmcGm-zk9oe6wkFp2dRWs33MBD5zCK9InUuHOGHvYB71TIBOu2XdgW5wxzCAkXFJAo9cpcAAAGI5q2H9A",
      },
    }).then((res) => {
      console.log(res);
    });
  }, []);
}

export default KakaoLogin;
