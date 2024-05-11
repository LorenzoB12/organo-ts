import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import styles from './Colaborador.module.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface ColaboradorProps {
    colaborador: IColaborador
    corDeFundo: string
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
}

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorProps) => {
    const propsFavorito = {
        size: 25,
        onClick: () => aoFavoritar(colaborador.id)
    };

    return (
        <div className={styles.colaborador}>
            <AiFillCloseCircle 
                className={styles.deletar}
                onClick={() => aoDeletar(colaborador.id)} 
                size={25}
            />
            <div className={styles.cabecalho} style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className={styles.rodape}>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className={styles.favoritar}>
                    {colaborador.favorito 
                        ? <AiFillHeart color={'red'} {...propsFavorito}/> 
                        : <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador