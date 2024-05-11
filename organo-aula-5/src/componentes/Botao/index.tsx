import { ReactElement } from 'react'
import styles from './Botao.module.css';

interface BotaoProps {
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return (<button className={styles.botao}>
        {props.children}
    </button>)
}

export default Botao;