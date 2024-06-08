import React from "react";
import "./Guide.css";
import { ReactComponent as NextLogo } from "../assets/images/NextLogo.svg";
import { ReactComponent as Male_group } from "../assets/images/Male_group.svg";
import { ReactComponent as Female_group } from "../assets/images/Female_group.svg";
import { Link } from "react-router-dom";

function Guide() {
    return (
        <div className="container">
            <div className="topSection">
                <div className="logo">
                    <NextLogo />
                </div>
                <div className="title">게임설명</div>
            </div>
            <div className="middleSection">
                <div className="leftImage">
                    <Male_group />
                </div>
                <div className="rightImage">
                    <Female_group />
                </div>
            </div>
            <div className="bottomSection">
                <div className="description">
                    합격 문자를 받은 순간부터 무박 해커톤까지 NEXT와 함께한 1학기의 추억을 되돌아보며,
                    <br />
                    <br />
                    상황마다 자신의 선택에 따라 이성의 호감을 얻어보세요.
                    <br />
                    <br />
                    무박 해커톤이 끝나고 가장 당신에게 호감을 느낀 이성은 누구일까요?
                </div>
                <button className="closeButton">
                    <Link to="/" color="black" className="closeButton">
                        닫기
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Guide;
