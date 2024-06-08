import styles from './Picture.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Picture = (props) => {
    const { chapter, setChapter, gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();

    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/context`);
    };
    console.log(gameContent.picture.url);

    const imgChanger = { backgroundImage: `url(${gameContent.picture.url})` };
    return <div className={styles.background} onClick={nextHandler} style={imgChanger}></div>;
};

export default Picture;
