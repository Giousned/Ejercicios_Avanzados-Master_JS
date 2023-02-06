let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here

  let visitas = 0;

  for (const item in customerData){

    if (firstName == item){

      for (const element in customerData[firstName]){

        visitas = customerData[firstName][element];

      }

    }

  }

  switch(visitas){
    case 1:
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
      break;
    
    case 2:
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
      break;

    case 3:
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
      break;

    case 4:
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
      break;

    default:
      greeting = `Welcome! Is this your first time?`;
      break;
  }
	
  return greeting;
}


let output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

let output2 = greetCustomer('Joe');
console.log(output2); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

let output3 = greetCustomer('Carol');
console.log(output3); // --> 'Welcome back, Carol! So glad to see you again!'


/* SOLUCION DADA
function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  if (!customerData[firstName]) greeting = 'Welcome! Is this your first time?';
  if (customerData[firstName] && customerData[firstName].visits === 1)
    greeting = `Welcome back, ${firstName}! We\'re glad you liked us the first time!`;
  if (customerData[firstName] && customerData[firstName].visits > 1)
    greeting = `Welcome back, ${firstName}! So glad to see you again!`;

  return greeting;
}

console.log(greetCustomer('Joe'));

*/
