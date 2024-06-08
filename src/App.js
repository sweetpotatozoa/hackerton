import './App.css';
import { Route, Routes } from 'react-router-dom';
import Choice from './pages/Choice/Choice';
import Npc from './pages/Npc/Npc';
import Chapter from './pages/Chapter/Chapter';
import Picture from './pages/Picture/Picture';
import Context from './pages/Context/Context';
import Change from './pages/Change/Change';
import { useState } from 'react';

const gameContent = {
    1: {
        chapter: {
            num: '#1',
            title: 'NEXT OT @ futureplay',
            date: '3월 3일 일요일',
            url: '/images/chapter1.png',
        },
        picture: { url: '/images/pic1.png' },
        context: '여기가 퓨쳐플레이구나..! 어떤 사람들이 있을까?',
        npc: { imgUrl: 'images/npc1.png' },
        choice: 'This is the choice for Chapter 1',
        change: 'This is the change for Chapter 1',
    },
    2: {
        chapter: { num: '#2', title: 'NEXT MT @ 우이동', date: '3월 30일 일요일', url: '/images/chapter2.png' },
        picture: { url: '/images/pic2.png' },
        context: 'NEXT에서 첫 MT!! 너무 재밌겠다 ㅎㅎ',
        npc: { imgUrl: 'images/npc2.png' },
        choice: 'This is the choice for Chapter 2',
        change: 'This is the change for Chapter 2',
    },
    3: {
        chapter: { num: '#3', title: 'NEXT 경짜 @ 경영 잔디', date: '4월 1일 월요일', url: '/images/chapter3.png' },
        picture: { url: '/images/pic3.png' },
        context: 'NEXT랑 중짜다! 다들 교복은 입었으려나? ㅎㅎ ',
        npc: { imgUrl: 'images/npc3.png' },
        choice: 'This is the choice for Chapter 3',
        change: 'This is the change for Chapter 3',
    },
    4: {
        chapter: {
            num: '#4',
            title: 'NEXT 개발세션 @ 스타트업스테이션',
            date: '3월 30일 일요일',
            url: '/images/chapter4.png',
        },
        picture: { url: '/images/pic4.png' },
        context: '오늘 또 개발 세션이다.. 제발 잘 따라갈 수 있으면 좋겠다',
        npc: { imgUrl: 'images/npc4.png' },
        choice: 'This is the choice for Chapter 4',
        change: 'This is the change for Chapter 4',
    },
    5: {
        chapter: { num: '#5', title: 'NEXT 돈굴돈굴 @ 카페파인', date: '3월 30일 일요일', url: '/images/chapter5.png' },
        picture: { url: '/images/pic5.png' },
        context: '10만원으로 1000만원 만들어야지!!',
        npc: { imgUrl: 'images/npc5.png' },
        choice: 'This is the choice for Chapter 5',
        change: 'This is the change for Chapter 5',
    },
    6: {
        chapter: {
            num: '#6',
            title: 'NEXT 입실렌티 @ 녹지운동장',
            date: '3월 30일 일요일',
            url: '/images/chapter6.png',
        },
        picture: { url: '/images/pic6.png' },
        context: 'NEXT랑 함께 하는 입실렌티! 즐겁다 ♥',
        npc: { imgUrl: 'images/npc6.png' },
        choice: 'This is the choice for Chapter 6',
        change: 'This is the change for Chapter 6',
    },
    7: {
        chapter: { num: '#7', title: 'NEXT 종강총회 @ 중앙광장', date: '3월 30일 일요일', url: '/images/chapter7.png' },
        picture: { url: '/images/pic7.png' },
        context: '벌써 NEXT 사람들이랑 알게 된 지 1학기가 지났다니..!',
        npc: { imgUrl: 'images/npc7.png' },
        choice: 'This is the choice for Chapter 7',
        change: 'This is the change for Chapter 7',
    },
    8: {
        chapter: {
            num: '#8',
            title: '무박 해커톤 @ 코드잇',
            date: '6월 8,9일 토,일요일',
            url: '/images/chapter8.png',
        },
        picture: { url: '/images/pic8.png' },
        context: 'NEXT는 이제부터 시작이지! 개발 실력 좀 발휘해 볼까?',
        npc: { imgUrl: 'images/npc1.png' },
        choice: 'This is the choice for Chapter 1',
        change: 'This is the change for Chapter 1',
    },
};

function App() {
    const [chapter, setChapter] = useState(8);

    return (
        <>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
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
            </Routes>
        </>
    );
}

export default App;
