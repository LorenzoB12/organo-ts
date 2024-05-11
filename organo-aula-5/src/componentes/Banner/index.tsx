import styles from './Banner.module.css'

interface BannerProps {
    enderecoImagem: string
    textoAlternativo?: string
}

export const Banner = ({enderecoImagem, textoAlternativo} :BannerProps) => {
    // JSX
    // /imagens/banner.png"
    // O banner principal da página do Organo
    return (
        <header className={styles.banner}>
            <img src={enderecoImagem} alt={textoAlternativo}/>
        </header>
    )
}

export default Banner;