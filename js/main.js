// VARIABLES

// querySelector
const matriculaInput = document.querySelector('#matriculaInput');
const btnComprobar = document.querySelector('#btnComprobar');
const dataTable = document.querySelector('#dataTable');
const mensajeMatriculas = document.querySelector('#mensaje-matriculas');
// Variable para nombrar clave en localStorage
const claveLocal = 'checkInLocal';

// Array de objetos para almacenar matrículas y datos
let matriculasArray = [
  {
    id: '1',
    matricula: '7834JKM',
    modelo: 'Toyota CH-R Hybrid',
    propietario: 'María OBrian Blü',
    multas: '',
  },
  {
    id: '2',
    matricula: '8725JFD',
    modelo: 'HYUNDAI i-20',
    propietario: 'Juan Fernández-Mar',
    multas: '3',
  },
  {
    id: '3',
    matricula: '9381POO',
    modelo: 'Toyota Auris',
    propietario: 'Sofía Gómez Addams',
    multas: '',
  },
  {
    id: '4',
    matricula: '5690MNB',
    modelo: 'KIA Sportage',
    propietario: 'Marta Reina Flor',
    multas: '2',
  },
  {
    id: '5',
    matricula: '8216JMN',
    modelo: 'Toyota CH-R Hybrid',
    propietario: 'Sebastián Bolardos Volados',
    multas: '6',
  },
  {
    id: '6',
    matricula: '4518KWH',
    modelo: 'Renault Laguna',
    propietario: 'Francisco Reyes Alonso',
    multas: '7',
  },
];

// Expresiones regulares
const regEx = {
  matricula: /^[0-9]{4}[A-Z]{3}$/,
  modelo: /^[a-z0-9\- ]{1,30}$/i,
  propietario: /^[a-zA-ZÑ-ÿ\s]{1,50}$/,
};

// fragment
const fragment = document.createDocumentFragment();

// Variable para recuperar localStorage. Tras el operador OR se proporciona un valor predeterminado en caso de que el localStorage sea NULL.
const recuperarLocal = JSON.parse(localStorage.getItem(claveLocal)) || [];

// EVENTOS

// Botón comprobar
btnComprobar.addEventListener('click', () => {
  const matricula = matriculaInput.value;
  comprobacionMatriculaFunc(matricula)
    .then((resp) => {
      mensajeMatriculas.textContent = resp;
      crearTablaPintada();
    })
    .catch((error) => {
      mensajeMatriculas.textContent = error;
      crearTablaPintada();
    });
});

// FUNCIONES

// Función almacenar localStorage
const almacenarLocal = (id) => {
  localStorage.setItem(claveLocal, JSON.stringify(id));
};

// Función comprobar
const comprobacionMatriculaFunc = (matricula) => {
  const matriculaEncontrada = matriculasArray.find(
    (item) => item.matricula === matricula
  );
  return new Promise((resolve, reject) => {
    if (matriculaEncontrada) {
      if (matriculaEncontrada.multas !== '') {
        resolve(
          `La matrícula ${matriculaEncontrada.matricula} tiene ${matriculaEncontrada.multas} multas.`
        );
      } else {
        resolve(
          `La matrícula ${matriculaEncontrada.matricula} no tiene multas.`
        );
      }
    } else {
      reject(`La matrícula ${matricula} no existe.`);
    }
  });
};

const crearTablaPintada = () => {
  if (dataTable) {
    dataTable.innerHTML = '';
    recuperarLocal.forEach((matricula) => {
      const filaNueva = document.createElement('tr');
      const celdaMatricula = document.createElement('td');
      celdaMatricula.textContent = matricula.matricula;
      const celdaModelo = document.createElement('td');
      celdaModelo.textContent = matricula.modelo;
      const celdaPropietario = document.createElement('td');
      celdaPropietario.textContent = matricula.propietario;
      const celdaMultas = document.createElement('td');
      celdaMultas.textContent = matricula.multas;

      filaNueva.append(celdaMatricula, celdaModelo, celdaPropietario, celdaMultas);
      fragment.append(filaNueva);
    });
    dataTable.append(fragment);
  }
};



