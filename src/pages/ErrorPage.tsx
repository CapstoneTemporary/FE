import React from "react";
import error404 from "../assets/images/error404.webp";
import Discription from "../components/Discription";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ErrorPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  return (
    <div
      className="error-page-container"
      style={
        isLoggedIn ? { height: "calc(100vh - 50px)" } : { height: "100vh" }
      }
    >
      <Discription
        h1="404 ERROR"
        ps={[
          "죄송합니다. 페이지를 찾을 수 없습니다.",
          "존재하지 않는 주소를 입력하셨거나",
          "요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.",
        ]}
        btn="Qcraft 홈"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default ErrorPage;
