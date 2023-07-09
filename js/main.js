// VARIABLES

// querySelector
const matriculaInput = document.querySelector('#matriculaInput');
const btnComprobar = document.querySelector('#btnComprobar');
const dataTable = document.querySelector('#dataTable');
const mensajeMaticulas = document.querySelector('#mensaje-matriculas');
// Variable para nombrar clave en localStorage
const claveLocal = 'checkInLocal'; 

// Array de objetos para almacenar matrículas y datos
let matriculasArray = [
    {
        id: '1',
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        id: '2',
        matricula: '8725JFD',
        modelo: 'HYUNDAI i-20,',
        propietario: 'Juan Fernández-Mar',
        multas: '3',
    },
    {
        id: '3',
        matricula: '9381POO',
        modelo: 'Toyota Auris,',
        propietario: 'Sofía Gómez Addams',
        multas: '',
    },
    {
        id: '4',
        matricula: '5690MNB',
        modelo: 'KIA Sportage,',
        propietario: 'Marta Reina Flor',
        multas: '2',
    },
    {
        id: '5',
        matricula: '8216JMN',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'Sebastián Bolardos Volados',
        multas: '6',
    },
    {
        id: '6',
        matricula: '4518KWH',
        modelo: 'Renault Laguna,',
        propietario: 'Francisco Reyes Alonso',
        multas: '7',
    }
];


// Expresiones regulares
const regEx = {
    matricula: /^[0-9]{4}[A-Z]{3}$/,
    modelo: /^[a-z0-9\- ]{1,30}$/i,
    propietario: /^[a-zA-ZÑ-ÿ\s]{1,50}$/
};

// fragment
const fragment = document.createDocumentFragment();

// Variable para recuperar localStorage. Tras el operador OR se proporciona un valor predeterminado en caso de que el  localStorage sea NULL.
const recuperarLocal = JSON.parse(localStorage.getItem(claveLocal)) || [];

// Variable para recuperar localStorage
// const recuperarLocal = JSON.parse(localStorage.getItem(claveLocal));
// EVENTOS

// Botón comprobar
document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('check-button')) {
    const valoresObjMatriculas = matriculasArray.matricula;
    comprobacionMatriculaFunc(valoresObjMatriculas)
      .then((resp) => {
        const mensajeMatriculas = document.getElementById('mensaje-matriculas');
        mensajeMatriculas.textContent = resp;
      })
      .catch((error) => {
        const mensajeMatriculas = document.getElementById('mensaje-matriculas');
        mensajeMatriculas.textContent = error;
      });
  }
});



// FUNCIONES

// Función almacenar localStorage
const almacenarLocal = (id) => {
  localStorage.setItem('claveLocal',JSON.stringify(claveLocal));

};

// Función comprobar 
const comprobacionMatriculaFunc = (matricula) => {
    const matriculaEncontrada = matriculasArray.find((item) => item.matricula === matricula);
    return new Promise((resolve, reject) => {
      if (matriculaEncontrada) {
        if (matriculaEncontrada.multas !== '') {
          resolve(`La matricula ${matricula} tiene ${multas}`);
          localStorage.setItem('claveLocal',JSON.stringify(claveLocal));
        } else {
          reject(`La matrícula ${matricula} no tiene multas.`);
          localStorage.setItem('claveLocal',JSON.stringify(claveLocal));
        }
      } else {
        reject(`La matrícula ${matricula} no existe.`);
        localStorage.setItem('claveLocal',JSON.stringify(claveLocal));
      }
      return matriculaEncontrada
    })
    
  };

// Función pintar
const crearTablaPintada = () => {
  dataTable.innerHTML = '';
  recuperarLocal.forEach((item) => {
    const filaNueva = document.createElement('TR');
    const celdaMatricula = document.createElement('TD');
    celdaMatricula.textContent = matricula.matricula;
    const celdaModelo = document.createElement('TD');
    celdaModelo.textConetnt = matricula.modelo;
    const celdaPropietario = document.createElement('TD');
    celdaPropietario.textContent = matricula.propietario;
    const celdaMultas = document.createElement('TD');
    celdaPropietario.textContent = matricula.multas;

    filaNueva.append(celdaMatricula, celdaModelo, celdaPropietario, celdaMultas);
    
  });
  fragment.append(filaNueva);
};