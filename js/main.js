// VARIABLES

// querySelector
const matriculaInput = document.querySelector('#matriculaInput');

const btnComprobar = document.querySelector('#btnComprobar');
const dataTable = document.querySelector('#dataTable');

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
        matricula: '8725JFDN',
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

// EVENTOS

// Botón comprobar
document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('check-button')) {
    const valoresObjMatriculas = target.id;
    comprobacionMatriculaFunc(valoresObjMatriculas)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});


// FUNCIONES

// Almacenar localStorage
const alamcenarLocal = (id) => {

};

// Funcion comprobar 
const comprobacionMatriculaFunc = (matricula) => {
    const matriculaEncontrada = matriculasArray.find((item) => item.matricula === matricula);
    return new Promise((resolve, reject) => {
      if (matriculaEncontrada) {
        if (matriculaEncontrada.multas !== '') {
          resolve(`La mnatricula ${matricula} tiene ${multas}`)
        } else {
          reject(`La matrícula ${matricula} no tiene multas.`)
        }
      } else {
        reject(`La matrícula ${matricula} no existe.`)
      }
      return matriculaEncontrada
    })
    
  };
  