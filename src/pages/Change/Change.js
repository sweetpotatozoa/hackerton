import styles from './Change.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Change = (props) => {
    const { chapter, setChapter, gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        if (chapterId === '8') {
            navigate('/Ending1');
            return;
        }
        const nextChapterId = parseInt(chapterId) + 1;
        setChapter(nextChapterId);
        navigate(`/chapter/${nextChapterId}`);
    };

    const imgChanger = { backgroundImage: `url(${gameContent.change.url})` };

    console.log(
        gameContent.change.first,
        gameContent.change.second,
        gameContent.change.third,
        gameContent.change.forth
    );

    return (
        <div className={styles.background}>
            <div className={styles.blurImage} style={imgChanger}></div>
            {/* <div className={styles.title}>호감도 게이지</div> */}
            <div className={styles.faces}>
                <div className={styles.face} onClick={nextHandler}>
                    <img src={'/images/face1.png'} alt="change" />
                    <div className={styles.bar} style={{ width: `${gameContent.change.first}` }}></div>
                </div>
                <div className={styles.face} onClick={nextHandler}>
                    <img src={'/images/face2.png'} alt="change" />
                    <div className={styles.bar} style={{ width: `${gameContent.change.second}` }}></div>
                </div>
                <div className={styles.face} onClick={nextHandler}>
                    <img src={'/images/face3.png'} alt="change" />
                    <div className={styles.bar} style={{ width: `${gameContent.change.third}` }}></div>
                </div>
                <div className={styles.face} onClick={nextHandler}>
                    <img src={'/images/face4.png'} alt="change" />
                    <div className={styles.bar} style={{ width: `${gameContent.change.forth}` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Change;
