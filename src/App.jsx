import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './globals.css';

function App() {
  const [numPage, setNumPage] = useState(0);
  const [fade, setFade] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [tentouButton, setTentouButton] = useState(false);
  const [fotoEscolhida, setFotoEscolhida] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (numPage === 1 || numPage === 4 || numPage === 7 || numPage === 10) {
      setShowIntro(true);
      setTimeout(() => {
        setShowIntro(false);
        setTimeout(() => {
          setNumPage(numPage + 1);
        }, 500);
      }, 2000);
    }
  }, [numPage]);

  const handleStart = () => {
    setFade(true);
    setTimeout(() => {
      setNumPage(numPage + 1);
      setFade(false);
    }, 500);
  };

  const handleMouseMove = () => {
    setTentouButton(true);
    const newY = Math.floor(Math.random() * 100);
    const newX = Math.floor(Math.random() * 200);
    setButtonPosition({ x: newX, y: newY });
  };

  const fotosNextPage = () => {
    handleStart();
    setFotoEscolhida(true);
  };

  const video = () => {
    window.open("https://youtu.be/s-JvoJbx1o8", "_blank");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500">
      {numPage === 5 || numPage === 6 ? (
        <>
          {numPage === 6 && fotoEscolhida && (
            <>
              <strong className="absolute top-0 right-10">AQUIIII</strong>
              <button className="absolute top-0 right-0">és tu</button>
            </>
          )}
          {numPage === 5 && (
            <button onClick={handleStart} className="absolute text-black top-0 right-0">
              és tu
            </button>
          )}
        </>
      ) : null}
      {numPage === 0 && (
        <div className={`bg-white bg-opacity-20 rounded-xl p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105 ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <strong className="text-5xl text-white font-bold animate-bounce">Quiz</strong>
          <button onClick={handleStart} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Começar
          </button>
        </div>
      )}
      {numPage === 1 && showIntro && (
        <div className="flex flex-col items-center opacity-100 transition-opacity duration-500">
          <strong className="text-4xl text-white font-bold animate-fade-in">Primeira Pergunta</strong>
        </div>
      )}
      {numPage === 2 && (
        <div className={`bg-white bg-opacity-20 rounded-xl p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105 ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <strong className="text-4xl text-white font-bold">Pergunta 1</strong>
          <h1 className="text-2xl text-white mt-5">Achas que eu te amo?</h1>
          <div className="flex gap-5">
            <button onClick={handleStart} className="px-3 my-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">
              sim
            </button>
            <button
              ref={buttonRef}
              className={`px-6 py-2 rounded-lg bg-red-600 text-white font-bold animate-pulse border-4 border-yellow-400 shadow-2xl transform hover:scale-125 transition duration-100 ease-in-out glow`}
              style={tentouButton ? { position: 'absolute', left: `${buttonPosition.x}px`, top: `${buttonPosition.y}px` } : {}}
              onMouseMove={handleMouseMove}
            >
              Não
            </button>
          </div>
        </div>
      )}
      {numPage === 3 && (
        <div className={`bg-white bg-opacity-20 rounded-xl p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105 ${fade ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          {tentouButton ? (
            <h1 className="text-2xl font-bold text-center animate-fade-in">Tentas te mesmo clicar no não, achas mesmo que não te amo?? Eu amo-te para caralho!!! Eu vou casar contigo, amor!</h1>
          ) : (
            <h1 className="text-2xl font-bold text-center animate-fade-in">Isso mesmo, amor. Eu amo-te para caramba! És o amor da minha vida. Estou ansioso para casar contigo, amor!!</h1>
          )}
          <button onClick={handleStart} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">
            Próxima pergunta
          </button>
        </div>
      )}
      {numPage === 4 && (
        <div className="flex flex-col items-center opacity-100 transition-opacity duration-500">
          <strong className="text-4xl text-white font-bold animate-fade-in">Segunda Pergunta</strong>
        </div>
      )}
      {numPage === 5 && (
        <div className="bg-white bg-opacity-20 rounded-xl p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105">
          <h1 className="text-2xl font-bold animate-fade-in">Qual é a mulher mais bonita?</h1>
          <div className="flex flex-col gap-5 md:flex-row">
            <img onClick={fotosNextPage} src={`${process.env.PUBLIC_URL}/portrait-of-happy-mature-women-ezgif.com-webp-to-jpg-converter.jpg`} alt="" className="w-64 h-64 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
            <img onClick={fotosNextPage} src={`${process.env.PUBLIC_URL}/summer-selfie-ezgif.com-webp-to-jpg-converter.jpg`} alt="" className="h-64 w-64 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
          </div>
        </div>
      )}
      {numPage === 6 && (
        <div className="bg-white bg-opacity-20 rounded-xl p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105">
          {fotoEscolhida ? (
            <h1 className="text-2xl font-bold w-96 animate-fade-in">Erradooo!! Sabes muito bem que tu és a mais bonita do mundo!! Eu vejo te como uma deusaa!! Linda Perfeita Maravilhosaaaa!!!!! Podias ter clicado no botão no canto superior direito</h1>
          ) : (
            <h1 className="text-2xl font-bold w-96 animate-fade-in">Exato tu és a mais linda do mundooo!! Sabes muito bem que eu vejo te como uma deusaa!! Linda Perfeita Maravilhosaaaa!!!!! </h1>
          )}
          <button onClick={handleStart} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">
            Próxima pergunta
          </button>
        </div>
      )}
      {numPage === 7 && (
        <div className="flex flex-col items-center opacity-100 transition-opacity duration-500">
          <strong className="text-4xl text-white font-bold animate-fade-in">Terceira pergunta </strong>
        </div>
      )}
      {numPage === 8 && (
        <div className="bg-white bg-opacity-20 rounded-xl m-24 p-10 flex flex-col gap-5 justify-center items-center shadow-xl transition duration-500 hover:scale-105">
          <strong className="text-2xl font-bold animate-fade-in">Vamos casar?</strong>
          <div className="flex gap-5">
            <button onClick={handleStart} className="px-3 my-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out">sim</button>
            <button onClick={video} className="px-3 my-2 rounded-lg bg-red-600 hover:bg-red-700 transition duration-300 ease-in-out">nao</button>
          </div>
        </div>
      )}
      {numPage === 9 && (
        <div className="flex flex-col items-center opacity-100 transition-opacity duration-500">
          <strong className="text-4xl text-white font-bold animate-fade-in"> Eu sei eu amo te para caralho e mal posso esperar por isso vida </strong>
          <button onClick={handleStart} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">
            Proximo
          </button>
        </div>
      )}
      {numPage === 10 && (
        <div className="flex flex-col items-center opacity-100 transition-opacity duration-500">
          <strong className="text-4xl text-white font-bold animate-fade-in">Informação: </strong>
        </div>
      )}
      {numPage === 11 && (
        <div className="bg-white bg-opacity-20 rounded-xl m-24 p-10 flex flex-col gap-5 justify-center items-center shadow-xl transition duration-500 hover:scale-105">
          <strong className="text-4xl animate-fade-in">Amo te muito💗</strong>
          <p className="text-xl text-center animate-fade-in">Só para te dizer que te amo mesmo muito amor, és tudo para mim independentemente dos problemas ou discussões, sabes que vou estar sempre do teu lado amor, para cuidar de ti e te proteger, independentemente dos nossos defeitos eu prometo mudar tudo o que for preciso para te ver bem, para te fazer a pessoa mais feliz do mundo agora e para sempre, mal posso esperar para ver te a chegar ao altar com o vestido branco e eu a começar a chorar por tanta felicidade amor, mal posso esperar pelo dia que vamos entrar pela primeira vez na nossa própria casa e dizer que conseguimos, poder dizer aos nossos filhos que apesar de tudo o que aconteceu apesar de todas as discussões nos nunca desistimos um do outro porque nos amamos muito e respeitamo-nos, por muito que eu tenha problemas de confiança és a primeira pessoa que esta verdadeiramente a tentar provar me que posso confiar de verdade em alguém e eu agradeço te muito por isso amor, sabes que tenho um enorme orgulho de ti amor por também estares a lutar pelo nosso futuro, desculpa todos os meus defeitos, desculpa eu as vezes ser irritante e teimoso, desculpa ultimamente andar muito inseguro juro que estou a pouco e pouco a mudar isso amor, por ti eu faço tudo o que for preciso, tal como ja disse amor mostra me respeito, lealdade e confiança que eu dou te o mundo, são as unicas coisas que mais te peço amor, amo te para krlh amor e vou amar agora e para sempre, prometo estar do teu lado para sempre ate ao dia que a morte nos separe, amo te milhoes meu amor.💗💗</p>
          <button onClick={handleStart} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">
            Proximo
          </button>
        </div>
      )}
      {numPage === 12 && (
        <div className="bg-white bg-opacity-20 rounded-xl w-1/2 p-10 flex flex-col gap-5 justify-center items-center shadow-xl transform transition duration-500 hover:scale-105">
          Fim.. Continuação...
          <button onClick={() => setNumPage(0)} className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out mt-5">
            Inicio
          </button>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
