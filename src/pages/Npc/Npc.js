import styles from './Npc.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Npc = (props) => {
    const { gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/choice`);
    };

    const imgChanger = { backgroundImage: `url(${gameContent.npc.url})` };
    return <div className={styles.background} onClick={nextHandler} style={imgChanger}></div>;
};

export default Npc;
