import './App.css';
import {Links} from './Components/Links/Links.js'
function App() {
  function show_scroll_title1(){
      var title1 = document.getElementById('title1');
      let scrollTop = document.documentElement.scrollTop;
      let titleHeight1 = title1.offsetTop;
      if(titleHeight1 < scrollTop){
        title1.style.left = '5%';
      }
    }
  function show_scroll_content1(){
    var content1 = document.getElementById('content1');
    var cover1 = document.getElementById('cover1');
    let scrollTop = document.documentElement.scrollTop;
    let contentHeight1 = content1.offsetTop;
    if(contentHeight1 + 300 < scrollTop){
      content1.style.right = 0;
      cover1.style.left = '100%';
    }
  }
    function show_scroll_title2(){
      var title2 = document.getElementById('title2');
      let scrollTop = document.documentElement.scrollTop;
      let titleHeight2 = title2.offsetTop;
      if(titleHeight2 + 400< scrollTop){
        title2.style.left = '5%';
      }
    }
    function show_scroll_content2(){
      var content2 = document.getElementById('content2');
      var cover2 = document.getElementById('cover2');
      let scrollTop = document.documentElement.scrollTop;
      let contentHeight2 = content2.offsetTop;
      if(contentHeight2 + 700 < scrollTop){
        content2.style.right = 0;
        cover2.style.left = '100%';
      }
    }
    function show_scroll_title3(){
      var title3 = document.getElementById('title3');
      let scrollTop = document.documentElement.scrollTop;
      let titleHeight3 = title3.offsetTop;
      if(titleHeight3 + 1200 < scrollTop){
        title3.style.left = '5%';
      }
    }
    function show_scroll_content3(){
      var content3 = document.getElementById('content3');
      var cover3 = document.getElementById('cover3');
      let scrollTop = document.documentElement.scrollTop;
      let contentHeight3 = content3.offsetTop;
      if(contentHeight3 + 1400 < scrollTop){
        content3.style.right = 0;
        cover3.style.left = '100%';
      }
    }
    window.addEventListener('scroll', show_scroll_title1);
    window.addEventListener('scroll', show_scroll_content1);
    window.addEventListener('scroll', show_scroll_title2);
    window.addEventListener('scroll', show_scroll_content2);
    window.addEventListener('scroll', show_scroll_title3);
    window.addEventListener('scroll', show_scroll_content3);
  return (
    <div className="App">
      <Links />
      <div className="content-bd">
        <div className="welcome">
          <h1>Hola! </h1>
          <h1>Soy Antonella Zacagnino</h1>
          <span>Bienvenidx a mi portfolio!</span>
        </div>
        <div className='background-stars'>
          <div className='star1'><i className="bi bi-star"></i></div>
          <div className='star2'><i className="bi bi-star"></i></div>
          <div className='star3'><i className="bi bi-star"></i></div>
          <div className='star4'><i className="bi bi-star"></i></div>
          <div className='star5'><i className="bi bi-star"></i></div>
          <div className='star6'><i className="bi bi-star"></i></div>
        </div>
        <div id='Sobre mi' className="container1">
          <div className="title">
            <h1 id="title1">Sobre mi</h1>
          </div>
          <div className="content">
            <div className="cover" id='cover1'></div>
            <p id="content1">
              Mi nombre es Antonella Zacagnino, vivo en Buenos Aires, Argentina, inicie en el 2018 en el mundo de la programación realizando mis primeros proyectos y trabajos en PHP.
              Actualmente estoy en busca de orientarme más hacia un perfil Frontend, los frameworks que más estoy manejando son Vue.js y React.js.
              Me gusta tener nuevas metas y desafíos y todo lo que sirva para crecimiento personal bienvenido sea!
            </p>
          </div>
        </div>
        <div id='Proyectos realizados' className="container2">
          <div className="title">
            <h1 id="title2">Proyectos realizados</h1>
          </div>
          <div className="content">
            <div className="cover" id='cover2'></div>
            <ul id="content2" className='projects'>
              <li>
                <a href='https://nuarielle.netlify.app/'>
                  <img src='./nuarielle.png' alt='nuarielle'/>
                </a>
                <span className='site-name'>Nuarielle</span>
                <span>Proyecto realizado para el curso de React.js de Coderhouse. E-commerce realizado en React y Firebase para la base de datos.</span>
              </li>
              <li>
                <a href='https://antonellazacagnino.netlify.app/'>
                  <img src='./cvweb.png' alt='cv-web'/>
                </a>
                <span className='site-name'>CV Web</span>
                <span>Curriculum Web personal realizado con React.js.</span>
              </li>
            </ul>
          </div>
        </div>
        <div id='Contactame!' className="container3">
          <div className="title">
            <h1 id="title3">Contactame!</h1>
          </div>
          <div className="content">
            <div className="cover" id='cover3'></div>
            <ul id="content3" className='icons'>
              <li>
                <a href='https://github.com/AntonellaZacagnino'><i className="bi bi-github"></i></a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/antonella-zacagnino/'><i className="bi bi-linkedin"></i></a>
              </li>
              <li>
                <a href='mailto:antonellazacagnino@gmail.com'><i className="bi bi-envelope-fill"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
