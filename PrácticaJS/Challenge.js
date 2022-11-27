import readline from 'readline';

//Partiremos de un listado de alumnos inicial:
  const students = [{
  age: 32,
  examScores: [8, 2, 4],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [5, 6, 9],
  gender: 'female',
  name: 'silvia'
},

{
    age: 33,
    examScores: [3, 5, 7],
    gender: 'female',
    name: 'cecilia'

},

{
    age: 40,
    examScores: [5, 8, 5],
    gender: 'male',
    name: 'Leo'

},
{
    age: 40,
    examScores: [5, 3, 2],
    gender: 'male',
    name: 'Carlos'

},

{
  age: 22,
  examScores: [5, 3, 2],
  gender: 'female',
  name: 'Luisa'

},

{
  age: 23,
  examScores: [5, 3, 2],
  gender: 'female',
  name: 'juan'

},

]

//y una serie de utilidades de apoyo en los ejercicios:

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
const TotalNames =['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia', 'pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos']



function calculateRandomNumber(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
    return randomNumber;
}

// Utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const isInt = (optionStr) => {
    const optionInteger = parseInt(optionStr); 
    if(Number.isNaN(optionInteger)){ 
        return false 
    } else {
        return true
    }
}

//Creamos al productor de la promesa
function getNumber() {
    const promise = new Promise((resolve, reject) => {
      rl.question('Introduce un número del 1 al 15: ', (num) => {
        rl.pause();
        if(isInt(num)) {
          num = Number.parseInt(num);
          resolve(num)
      }
        else{
          reject('Has terminado')
        }
        })
      })
        return promise;
      }
  
 //Creamos al consumidor
  async function runGame(){
    
      let numberFromConsole;
      
    do {
      const runGame = 
        '\nRequirements: '+
        '\n1- Mostrar en formato de tabla todos los alumnos.'+ 
        '\n2- Mostrar por consola la cantidad de alumnos que hay en clase.'+
        '\n3- Mostrar por consola todos los nombres de los alumnos'+
        '\n4- Eliminar el último alumno de la clase.'+
        '\n5- Eliminar un alumno aleatoriamente de la clase.'+
        '\n6- Mostrar por consola todos los datos de los alumnos que son chicas.'+
        '\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.'+
        '\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.'+
        '\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.'+
        '\n10- Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío.'+
        '\n11- Mostrar por consola el nombre de la persona más joven de la clase.'+
        '\n12- Mostrar por consola la edad media de todos los alumnos de la clase.'+
        '\n13- Mostrar por consola la edad media de las chicas de la clase.'+
        '\n14- Añadir nueva nota a los alumnos.'+
        '\n15- Ordenar el array de alumnos alfabéticamente según su nombre.' +
        '\n'
      
      console.log(runGame)
      
      try {
        numberFromConsole = await getNumber();
    }
      catch(error) {
        console.log(error)
        process.exit(0);
    }

    //Mostrar en formato de tabla todos los alumnos
      switch(numberFromConsole) {
        case 1:
          console.log('Se muestra los alumnos en formato tabla',);
          console.table(students);
          break;
  
    //Mostrar por consola la cantidad de alumnos que hay en clase.
        case 2:
          console.log('Alumnos totales en clase: ', students.length);
          break;


    //Mostrar por consola todos los nombres de los alumnos
        //Revisar la 3
        case 3:
          for (let index = 0; index <= students.length - 1; index++){

            console.log('Los nombres de los alumn"s de la clase es ',students[index].name)
          }
          break;

    //Eliminar el último alumno de la clase.
        case 4:
          console.log('Has eliminado al último alumno/a: ', students.pop())
          break;

    //Eliminar un alumno aleatoriamente de la clase.
        case 5:
          let randomNumberstudent = calculateRandomNumber(0, students.length - 1)

          console.log('Has eliminado aleatoriamente a: ', students.splice(randomNumberstudent, 1))
          break;

    //Mostrar por consola todos los datos de los alumnos que son chicas.      
  
        case 6:
          let females = students.filter(student => student.gender === 'female')

          console.log('Los datos de todas las alumnas de la clase es el siguiente: ',females)
          break;


    //Mostrar por consola el número de chicos y chicas que hay en la clase.
        case 7:
          let femalestotal = students.filter(student => student.gender === 'female');
          let malestotal = students.filter(student => student.gender === 'male');

          console.log('El número de alumnas es: ', femalestotal.length);
          console.log('El número de alumnos es: ', malestotal.length);
          break;

    //Mostrar true o false por consola si todos los alumnos de la clase son chicas.
  
        case 8:
          let femalesinClass = students.every(student => student.gender === 'female')
          console.log('En la clase solo hay alumnas',femalesinClass);
          break;
  
    //Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años

        case 9:
          let youngStudents = students.filter(student => student.age >= 20 && student.age <= 25)
          let youngStudentslist = youngStudents.map(student => student.name);

          console.log("Alumno entre los 20 y 25 años: ", youngStudentslist);
          break;

    //Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío.
  
        case 10:

          let randomName = TotalNames[calculateRandomNumber(0, TotalNames.length - 1)];
          let randomGender = (availableFemaleNames.includes(randomName)) ? 'female' : 'male';
          
          let newStudent = students.push({
            name: randomName,
            age: calculateRandomNumber(20, 50),
            gender: randomGender, 
            examScores: [],
          });

          console.log("El nuevo alumno@ de la clase es: ", students[newStudent - 1]) 
          break;
  
      // Mostrar por consola el nombre de la persona más joven de la clase.
        // Revisar
        case 11:
        let youngerStudent = students.reduce((accum, value) => accum.age < value.age ? accum : value);

        console.log('El alumn@ más joven es: ', youngerStudent);
        break;

    //Mostrar por consola la edad media de todos los alumnos de la clase.
  
        case 12:
          let sumstudentsAge = (students.reduce((sum, n) => {return (sum + n.age)}, 0))
          let averAge = sumstudentsAge / students.length

          console.log('La edad media de la clase es: ', averAge);
          break;

      //Mostrar por consola la edad media de las chicas de la clase
        case 13:

          let femalesAge = students.filter(student => student.gender === 'female');
          let sumfemaleAge = (femalesAge.reduce((sum, n) => {return (sum + n.age)}, 0))
          let medAgeFemale = sumfemaleAge / femalesAge.length

          console.log('La edad media de las alumnas es: ', medAgeFemale);
          break;
  
      // Añadir nueva nota a los alumnos
        case 14:

          students.forEach(student => student.examScores.push(calculateRandomNumber(0, 10)));

          console.log('Añadimos una nueva nota a los estudiantes: ', students)
          break;
          

      //Ordenar el array de alumnos alfabéticamente según su nombre. Revisar
        case 15:
          let alphaStudents = students.sort((a,b) => (a.name > b.name) ? 1 : -1); 
          console.log(alphaStudents)
          break;



      //16- Mostrar por consola el alumno de la clase con las mejores notas.
      //El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.
          
      //17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
          
      /// 18- Añadir un punto extra a cada nota existente de todos los alumnos. Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.

      // Cerramos el juego con rl.close
        default:
          rl.close() 
          console.log('Has terminado')
      }
  } while (numberFromConsole > 0 && numberFromConsole <= 15);
  }
  
  runGame();

