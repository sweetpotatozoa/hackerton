import styles from './Choice.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const Choice = (props) => {
    const { chapter, setChapter } = props;
    const { chapterId } = useParams();
    const navigate = useNavigate();
    const nextHandler = () => {
        navigate(`/chapter/${chapterId}/Change`);
    };

    return (
        <div className={styles.background}>
            <h1 className={styles.scene}>#1. 첫인사 OT 자기소개</h1>
            <div className={styles.answer}>
                <div className={styles.question}>
                    <p>
                        OT 퓨처플레이에 처음 들어가서 저 멀리 넥스트 학회원들과 만났다. 바로 옆자리에 초면인 12기가
                        있다.
                    </p>
                </div>
                <div className={styles.options}>
                    <div className={styles.option}>
                        <p>
                            “안녕하세요! 저는 유저네임 이라고 해요! 학과가 어떻게 되세요? ” 밝게 인사하며 작은
                            아이스브레이킹을 시도한다.
                        </p>
                    </div>
                    <div className={styles.option}>
                        <p>“아 안녕하세요 ㅎㅎ” 하고 각자 휴대폰을 보며 OT 시작하기를 얌전히 기다린다</p>
                    </div>
                    <div className={styles.option}>
                        <p> 굳이 어색할 상황을 지금부터 만들 필요는 없다.. 조용히 자리에 앉아 있는다</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choice;
