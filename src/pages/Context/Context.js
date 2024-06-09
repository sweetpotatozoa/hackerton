import styles from './Context.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Context = (props) => {
    const { gameContent } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/npc`);
    };

    return (
        <div className={styles.background} onClick={nextHandler}>
            <div className={styles.narrative}>{gameContent.context}</div>
        </div>
    );
};

export default Context;
