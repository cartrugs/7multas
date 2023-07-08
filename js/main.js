// Variables 

// querySelector
const matriculaInput = document.querySelector('#matriculaInput');
const btnComprobar = document.querySelector('#btnComprobar');
const dataTable = document.querySelector('#dataTable');

// Array de objetos para almacenar matrículas y datos
let matriculasArray = [
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    },
    {
        matricula: '7834JKM',
        modelo: 'Toyota CH-R Hybrid,',
        propietario: 'María OBrian Blü',
        multas: '',
    }
]
// Expresiones regulares
const regEx = {
    matricula: /^[0-9]{4}[A-Z]{3}$/,
    modelo: /^[a-z0-9\- ]{1,30}$/i,
    propietario: /^[a-zA-ZÑ-ÿ\s]{1,50}$/
};
