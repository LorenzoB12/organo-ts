import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import styles from './Formulario.module.css';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador'
import { ITimes } from '../../compartilhado/interfaces/ITimes'
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps {
    aoColaboradorCadastrado: (time: IColaborador) => void
    times: string[]
    cadastrarTime: (time: ITimes) => void
}

const Formulario = ({aoColaboradorCadastrado, times, cadastrarTime}: FormularioProps) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        limparCampos();
    }

    const limparCampos = () => {
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    const limparCamposTime = () => {
        setNomeTime("");
        setCorTime("");
    }

    return (
        <section className={styles.formularioContainer}>
            <form className={styles.formulario} onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form 
                className={styles.formulario}
                onSubmit={(event) => {
                    event.preventDefault();
                    cadastrarTime({nome: nomeTime, cor: corTime, id: uuidv4()});
                    limparCamposTime();
                }}
            >
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do novo time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    obrigatorio
                    tipo='color'
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario