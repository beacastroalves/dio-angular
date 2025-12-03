function addNumber(x: number, y: number): number {
  return x + y;
};

let soma: number = addNumber(2, 5);

console.log(soma);


function addToHello(name: string): string {
  return `Hello ${name}`;
};

console.log(addToHello('Beatriz'));

function callToPhone(phone: number | string): number | string {
  return phone;
}

console.log(callToPhone(8599887-7665));

async function getDatabase(id: number): Promise<string> {
  return "Beatriz";
}

