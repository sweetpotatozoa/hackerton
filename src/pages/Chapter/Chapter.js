import styles from './Chapter.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Chapter = (props) => {
    const { chapter, setChapter, gameContent } = props;
    const { chapterId } = useParams();

    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/picture`);
    };

    console.log(gameContent);
    const divStyle = {
        width: '1000px',
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'flex-end',
        backgroundImage: `url(${gameContent.chapter.url})`,
    };

    return (
        <div className={styles.background} onClick={nextHandler} style={divStyle}>
            <h1 className={styles.scene}>#{chapter}</h1>
            <div className={styles.title}>{gameContent.chapter.title}</div>
            <div className={styles.date}>{gameContent.chapter.date}</div>
        </div>
    );
};

export default Chapter;
