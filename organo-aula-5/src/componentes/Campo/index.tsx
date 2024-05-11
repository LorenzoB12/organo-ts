import styles from './Campo.module.css'

interface CampoProps {
    tipo?: 'text' | 'number' | 'date' | 'password' | 'email' | 'readonly' | 'color'
    placeholder: string
    aoAlterado: (valor: string) => void
    label: string
    valor: string
    obrigatorio?: boolean
}

const Campo = ({tipo = 'text', placeholder, aoAlterado, label, valor, obrigatorio = false} : CampoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`${styles.campo} ${tipo === 'color' ? styles['campo-color'] : ''}`}>
            <label>
                {label}
            </label>
            <input
                type={tipo} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Campo;