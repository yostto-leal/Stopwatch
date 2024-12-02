import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [tempo, setTempo] = useState(0); // Tempo em segundos
  const [correndo, setCorrendo] = useState(false); // Controle se o cronômetro está em execução
  const [intervalo, setIntervalo] = useState(null); // Armazena o ID do setInterval

  // Função para iniciar o cronômetro
  const iniciar = () => {
    setCorrendo(true); // Coloca o estado 'correndo' como true para iniciar
  };

  // Função para parar o cronômetro
  const parar = () => {
    setCorrendo(false); // Para o cronômetro, mas não zera o tempo
  };

  // Função para zerar o cronômetro
  const zerar = () => {
    setTempo(0); // Zera o tempo
    setCorrendo(false); // Garante que o cronômetro também pare
  };

  // Efeito que controla o cronômetro
  useEffect(() => {
    if (correndo) {
      const id = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 1); // Aumenta o tempo em 1 segundo a cada intervalo
      }, 1000);
      setIntervalo(id); // Armazena o ID do intervalo
    } else {
      // Limpa o intervalo quando o cronômetro é parado
      if (intervalo) {
        clearInterval(intervalo);
      }
    }

    // Cleanup: limpa o intervalo se o componente for desmontado
    return () => {
      if (intervalo) {
        clearInterval(intervalo);
      }
    };
  }, [correndo]); // Dependência no estado 'correndo'

  // Função para formatar o tempo em minutos:segundos
  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <div className="cronometro">
        <p>{formatarTempo(tempo)}</p>

        {/* Exibe o botão Iniciar quando o cronômetro não está correndo */}
        {!correndo && tempo === 0 && <button onClick={iniciar}>Iniciar</button>}

        {/* Exibe o botão Parar quando o cronômetro está em execução */}
        {correndo && <button onClick={parar}>Parar</button>}

        {/* Exibe o botão Zerar quando o cronômetro está parado */}
        {!correndo && tempo > 0 && <button onClick={zerar}>Zerar</button>}
      </div>
    </div>
  );
}

export default App;
