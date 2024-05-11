import styles from './Rodape.module.css';
import facebook from '../../imagens/facebook.png'
import twitter from '../../imagens/twitter.png';
import instagem from '../../imagens/instagram.png'
import logo from '../../imagens/logo.png'

const Rodape = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <img src={facebook}></img>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <img src={twitter}></img>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src={instagem}></img>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src={logo}></img>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape;