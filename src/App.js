import './styles/styles.scss';

const App = () => (
  <>
    <div className="div-1">
      <h2>Hola mundo</h2>
      <p>soy un parrafo hecho con react</p>
    </div>

    <div className="div-2">
      <h2>Hola mundo! soy el segundo saludo</h2>
      <p>soy el segundo parrafo hecho con react</p>
    </div>
  </>
)

export default App;

//Reglas JSX
//1.- Toda etiqueta debe cerrarse
//2.- Los componentes deven devolver un solo elemento padre
//3.- Apoyarse de los Fragment para devolver un solo elemento padre
//4.- Sintaxis de Fragment <Fragment><Fragment> ó <></>
//5.- img siempre se cierra
//6.- Para asignar clases a los elementos se usa ClassName
//7.- for en JSX pasa a ser htmlFor