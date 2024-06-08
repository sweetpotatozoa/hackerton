import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import InitialScreen from "./pages/InitialScreen";
import NameSelection from "./pages/NameSelection";
import GenderSelection from "./pages/GenderSelection";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";
import Animation4 from "./pages/Animation4";
import NextButtonScreen from "./pages/NextButtonScreen";
import ResultScreen from "./pages/ResultScreen";
import Guide from "./pages/Guide";
import Choice from "./pages/Choice/Choice";
import Npc from "./pages/Npc/Npc";
import Chapter from "./pages/Chapter/Chapter";
import Picture from "./pages/Picture/Picture";
import Context from "./pages/Context/Context";
import Change from "./pages/Change/Change";
import Ending1 from "./pages/Ending1/Ending1";
import "./App.css";

const gameContent = {
    1: {
        chapter: {
            num: "#1",
            title: "NEXT OT @ futureplay",
            date: "3월 3일 일요일",
            url: "/images/chapter1.png",
        },
        picture: { url: "/images/pic1.png" },
        context: "여기가 퓨쳐플레이구나..! 어떤 사람들이 있을까?",
        npc: { url: "/images/npc1.png" },
        choice: {
            question: "퓨쳐플레이에 도착해서 자리를 잡고 앉았다. 옆자리에 초면인 학회원 강민이 있다. 이때 나는",
            answer1: '"안녕하세요! 성함이 어떻게 되세요? 학과는요?" 먼저 아이스브레이킹을 시도한다',
            answer2: "짧은 인사만 하고 각자 휴대폰을 보며 OT 시작하기를 얌전히 기다린다",
            answer3: "굳이 어색할 상황을 지금부터 만들 필요는 없다.. 말을 걸지 않고 가만히 있는다",
            url: "/images/npc1.png",
        },
        change: {
            url: "/images/npc1.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    2: {
        chapter: { num: "#2", title: "NEXT MT @ 우이동", date: "3월 30일 일요일", url: "/images/chapter2.png" },
        picture: { url: "/images/pic2.png" },
        context: "NEXT에서 첫 MT!! 너무 재밌겠다 ㅎㅎ",
        npc: { url: "/images/npc2.png" },
        choice: {
            question:
                '술게임이 끝난 새벽 3시에 연애 밸런스게임 토크가 시작되었다. 영헌이 옆에서 "너는 어떤 연락 빈도가 좋아?" 라고 물었다.',
            answer1: '"한.. 그래도 2~3시간에 한 번씩은 연락해서 뭐하고 있는지 알려주는게 좋던데?"',
            answer2: '"서로 편할 때 연락하고 아침/밤인사만 꼭 하면 4시간도 괜찮긴 해"',
            answer3: '"연락 잘 안 되더라도 만날 때 문제가 없다면 연락은 크게 중요하지 않다고 생각해"',
            url: "/images/npc2.png",
        },
        change: {
            url: "/images/npc2.png",
            first: 50,
            second: 50,
            third: 50,
            forth: 30,
        },
    },
    3: {
        chapter: { num: "#3", title: "NEXT 경짜 @ 경영 잔디", date: "4월 1일 월요일", url: "/images/chapter3.png" },
        picture: { url: "/images/pic3.png" },
        context: "NEXT랑 중짜다! 다들 교복은 입었으려나? ㅎㅎ ",
        npc: { url: "/images/npc3.png" },
        choice: {
            question:
                "경영본관 앞에서 짜장면 배달이 도착했다. 하지만 젓가락이 5쌍이나 모자란 상황. 옆에 앉은 소영이는 젓가락이 없었고 나는 젓가락을 하나 가지고 있었다.",
            answer1: "`난 어떻게든 먹겠지` 소영이에게 젓가락을 양보한다.",
            answer2: "`내가 먹어야 하니까…` 어쩔 수 없다고 생각해서 모른 척 한다.",
            answer3: "젓가락이 없는 5명의 학회원들을 위해 혼자 조용히 편의점에 가서 젓가락을 사온다.",
            url: "/images/npc3.png",
        },
        change: {
            url: "/images/npc3.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    4: {
        chapter: {
            num: "#4",
            title: "NEXT 개발세션 @ 스타트업스테이션",
            date: "3월 30일 일요일",
            url: "/images/chapter4.png",
        },
        picture: { url: "/images/pic4.png" },
        context: "오늘 또 어려운 개발 세션이다.. 제발 잘 따라갈 수 있으면 좋겠다",
        npc: { url: "/images/npc4.png" },
        choice: {
            question: "혁준의 AWS 세션 실습이 너무 어려워 고민하고 있을 때, 철종이 옆으로 왔다.",
            answer1: "“이거 좀 도와줘ㅠㅠ 이거 어떻게 해?“ 잘 하려고 적극적으로 물어본다.",
            answer2: "`최대한 혼자 해봐야지..!` 조용히 구석으로 이동해서 어떻게든 도움 안 받고 혼자 해보려고 한다.",
            answer3: "집에 가서 따로 해야겠다 .. 우선 세션에서는 포기하고 철종에게 웃으며 말을 건다.",
            url: "/images/npc4.png",
        },
        change: {
            url: "/images/npc4.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    5: {
        chapter: { num: "#5", title: "NEXT 돈굴돈굴 @ 카페파인", date: "3월 30일 일요일", url: "/images/chapter5.png" },
        picture: { url: "/images/pic5.png" },
        context: "10만원으로 1000만원 만들어야지!!",
        npc: { url: "/images/npc5.png" },
        choice: {
            question:
                "첫 회의가 벌써 2시간 째, 도현이 기발한 아이디어를 계속 내놓아서 고맙긴 하지만, 계속 방향이 바뀌는 바람에 모두가 지쳐가고 있다.",
            answer1:
                '"음..! 우선은 좀 다들 지쳐있으니까 다들 쉬었다가 더 얘기 할까?" 모두의 분위기를 읽고 회의를 잠시 멈추자고 한다..',
            answer2:
                "“와 아이디어 진짜 좋다! 회의록에 다 적어두자” 혼자서 계속 기획 아이디어를 내는 도현의 의견을 경청 해준다.",
            answer3: "가만히 있으면 중간은 간다.. 아무 말도 하지 않는다",
            url: "/images/npc5.png",
        },
        change: {
            url: "/images/npc5.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    6: {
        chapter: {
            num: "#6",
            title: "NEXT 입실렌티 @ 녹지운동장",
            date: "3월 30일 일요일",
            url: "/images/chapter6.png",
        },
        picture: { url: "/images/pic6.png" },
        context: "NEXT랑 함께 하는 입실렌티! 즐겁다 ♥",
        npc: { url: "/images/npc6.png" },
        choice: {
            question: "NEXT 학회원들과 다같이 입실렌티에서 응원을 한다. ",
            answer1: "방방 뛰면서 춤을 따라 추고 노래를 따라 부르면서 즐겁게 축제를 즐긴다.",
            answer2: "부끄러워 리듬만 살살 타면서 조용히 축제를 즐긴다",
            answer3: "NEXT 학회원들과 좀 즐기다가 뒤풀이는 더 편한 친구들과 하러 빠진다. ",
            url: "/images/npc6.png",
        },
        change: {
            url: "/images/npc6.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    7: {
        chapter: { num: "#7", title: "NEXT 종강총회 @ 중앙광장", date: "3월 30일 일요일", url: "/images/chapter7.png" },
        picture: { url: "/images/pic7.png" },
        context: "벌써 NEXT 사람들이랑 알게 된 지 1학기가 지났다니..!",
        npc: { url: "/images/npc7.png" },
        choice: {
            question:
                "종강 총회 때 옆자리에 있던 연준이가 크러쉬를 실수로 자기 옷에 흘렸다. 많이 흘리진 않았지만, 신문지에도 쏟아져 있고 옷 소매가 축축해 보인다.",
            answer1: "“괜찮아? 많이 젖었어?” 다정하게 걱정해준다.",
            answer2: "말 없이 바로 휴지를 찾아 건네준다.",
            answer3: "“아 지금 술 버리실려고 하신 거예요? ㅋㅋㅋ”라고 하며 놀린다.",
            url: "/images/npc7.png",
        },
        change: {
            url: "/images/npc7.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
    8: {
        chapter: {
            num: "#8",
            title: "무박 해커톤 @ 코드잇",
            date: "6월 8,9일 토,일요일",
            url: "/images/chapter8.png",
        },
        picture: { url: "/images/pic8.png" },
        context: "NEXT는 이제부터 시작이지! 개발 실력 좀 발휘해 볼까?",
        npc: { url: "/images/npc8.png" },
        choice: {
            question: "아침 10시에 만나서 자정이 된 피곤한 시각, 민지가 내 해커톤 아이디어를 훔쳐본다.",
            answer1: "“저리 가!” 소리치며 노트북 화면을 숨긴다.",
            answer2: "투명인간 취급하며 무시한다.",
            answer3: "민지네 팀으로 찾아가서 민지의 아이디어를 똑같이 훔쳐본다.",
            url: "/images/npc8.png",
        },
        change: {
            url: "/images/npc8.png",
            first: 0,
            second: 0,
            third: 0,
            forth: 0,
        },
    },
};

const App = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });
    const [chapter, setChapter] = useState(1);

    const navigate = useNavigate();

    const startGame = () => {
        navigate("/nameSelection");
        new Audio("/audios/princess_maker.mp3").play();
    };

    const selectName = (enteredName) => {
        setName(enteredName);
        navigate("/genderSelection");
    };

    const selectGender = (selectedGender) => {
        setGender(selectedGender);
        new Audio(`/audios/${selectedGender}_letsgo.m4a`).play();
        navigate("/animation1");
    };

    const endGame = () => {
        const highestScore = Math.max(...Object.values(scores));
        const matchedPerson = Object.keys(scores).find((person) => scores[person] === highestScore);
        navigate("/result", { state: { matchedPerson } });
    };

    const resetGame = () => {
        setScores({ A: 0, B: 0, C: 0, D: 0 });
        navigate("/");
        localStorage.clear();
    };

    return (
        <div style={{ width: "1000px", height: "650px" }}>
            <Routes>
                <Route path="/" element={<InitialScreen startGame={startGame} />} />
                <Route path="/nameSelection" element={<NameSelection selectName={selectName} />} />
                <Route path="/genderSelection" element={<GenderSelection selectGender={selectGender} />} />
                <Route path="/animation1" element={<Animation1 />} />
                <Route path="/animation2" element={<Animation2 />} />
                <Route path="/animation3" element={<Animation3 />} />
                <Route path="/animation4" element={<Animation4 />} />
                <Route path="/nextButtonScreen" element={<NextButtonScreen setScreen={navigate} />} />
                <Route path="/result" element={<ResultScreen resetGame={resetGame} />} />
                <Route path="/guide" element={<Guide />} />
                <Route
                    path="/chapter/:chapterId"
                    element={<Chapter chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route
                    path="/chapter/:chapterId/picture"
                    element={<Picture chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route
                    path="/chapter/:chapterId/context"
                    element={<Context chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route
                    path="/chapter/:chapterId/npc"
                    element={<Npc chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route
                    path="/chapter/:chapterId/choice"
                    element={<Choice chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route
                    path="/chapter/:chapterId/change"
                    element={<Change chapter={chapter} setChapter={setChapter} gameContent={gameContent[chapter]} />}
                />
                <Route path="/Ending1" element={<Ending1 />} />
            </Routes>
        </div>
    );
};

export default App;
