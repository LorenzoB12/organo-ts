import { useState } from 'react';
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { IColaborador } from './compartilhado/interfaces/IColaborador';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';
import { ITimes } from './compartilhado/interfaces/ITimes';
import timesJson from './json/times.json';
import colaboradoresJson from './json/colaboradores.json';
import styles from './App.module.css';

function App() {

  const [times, setTimes] = useState<ITimes[]>(
    timesJson.map((t: ITimes) => ({...t, id: uuidv4()}))
  );

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([
    colaboradoresJson.flatMap((c: IColaborador) => (
      times.map((time: ITimes) => (
        {...c, id: uuidv4(), time: time.nome}
      ))
    ))
  ][0]);

  const mudarCorDoTime = (cor: string, id: string) => {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = (id: string) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const cadastrarTime = (novoTime: ITimes) => {
    setTimes([...times , novoTime])
  }

  const aoFavoritar = (id: string) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div className={styles.App}>
      <Banner enderecoImagem='/imagens/banner.png'/>
      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        cadastrarTime={cadastrarTime}
      />

      <section className={styles.times}>
        <h1>Minha organização</h1>
          {times.map((time, indice) => 
            <Time 
              key={indice}
              time={time} 
              colaboradores={
                colaboradores.filter(colaborador => colaborador.time === time.nome)
              }
              aoDeletar={deletarColaborador}
              mudarCor={mudarCorDoTime}
              aoFavoritar={aoFavoritar}
            />
          )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
