import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import { ITimes } from '../../compartilhado/interfaces/ITimes'
import Colaborador from '../Colaborador'
import styles from './Time.module.css'
import fundo from '../../imagens/fundo.png';
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    time: ITimes
    colaboradores: IColaborador[]
    aoDeletar: (id: string) => void
    mudarCor: (cor: string, id: string) => void
    aoFavoritar: (id: string) => void
}

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}: TimeProps) => {
    return (
        (colaboradores.length > 0) ? 
        <section 
            className={styles.time}
            style={{backgroundImage: fundo, backgroundColor: hexToRgba(time.cor, 0.6)}}
        >
            <input 
                value={time.cor}
                type='color'
                className={styles.inputCor}
                onChange={event => mudarCor(event.target.value, time.id)}
            />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className={styles.colaboradores}>
                {colaboradores.map( (colaborador, indice) => 
                    <Colaborador 
                        key={indice} 
                        colaborador={colaborador}
                        corDeFundo={time.cor} 
                        aoDeletar={aoDeletar}
                        aoFavoritar={aoFavoritar}
                    /> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time