import './ListaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string) => void
    label: string
    required?: boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = ({aoAlterado, label, required = false, valor, itens} : ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select 
                onChange={evento => 
                    aoAlterado(evento.target.value)
                } 
                required={required} 
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa