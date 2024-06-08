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
        const nextChapterId = parseInt(chapterId.match(/\d+/)[0], 10) + 1;
        setChapter(nextChapterId);
        navigate(`/chapter/${nextChapterId}`);
    };

    const imgChanger = { backgroundImage: `url(${gameContent.change.url})` };

    return (
        <div className={styles.background} onClick={nextHandler}>
            <div className={styles.blurImage} style={imgChanger}></div>
            <div className={styles.faces}>
                <div className={styles.face}>
                    <img src={'/images/face1.png'} alt="change" />
                    <div className={styles.gauge}>
                        <div className={styles.fill} style={{ width: '50%' }}></div>
                    </div>
                </div>
                <div className={styles.face}>
                    <img src={'/images/face2.png'} alt="change" />
                    <div className={styles.gauge}>
                        <div className={styles.fill} style={{ width: '50%' }}></div>
                    </div>
                </div>
                <div className={styles.face}>
                    <img src={'/images/face3.png'} alt="change" />
                    <div className={styles.gauge}>
                        <div className={styles.fill} style={{ width: '50%' }}></div>
                    </div>
                </div>
                <div className={styles.face}>
                    <img src={'/images/face4.png'} alt="change" />
                    <div className={styles.gauge}>
                        <div className={styles.fill} style={{ width: '50%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Change;
