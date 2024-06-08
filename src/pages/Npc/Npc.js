import styles from './Npc.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Npc = (props) => {
    const { chapter, setChapter, gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/choice`);
    };

    const imgChanger = { backgroundImage: `url(${gameContent.npc.imgUrl})` };
    return <div className={styles.background} onClick={nextHandler}></div>;
};

export default Npc;
