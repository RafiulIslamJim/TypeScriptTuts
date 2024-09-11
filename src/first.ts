let sales: number = 134545;
let course: string = 'TypeScript';
let isPublished: boolean = true;

function greet(name: string): string
{
  return 'Hello ' + name;
}

console.log(greet(("Jim")));
console.log(sales);
console.log(course);
console.log(isPublished);

let numbers: number[] = [2,3,57,75];

numbers.push(5);
let lastNumber = numbers.pop();
console.log(lastNumber);

let doubledNumbers = numbers.map(num => num*2);
console.log(doubledNumbers);


