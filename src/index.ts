// Dia 1

const add = (n1: number, n2: number): number => {
  return n1 + n2;
}

let result = add(4, 5);
console.log(result)

// Dia 2

let values: number[] = [1, 2, 3, 4, 5]
let people: string[] = ['Felipe', 'Silva', 'Franca'];

let items: [ string, number, boolean] = ['Felipe', 26, true]

enum Role { admin = 1, read = 2, backup = 3}

const user = {
  firstName: 'Felipe',
  age: 26,
  role: Role.admin
}
console.log(user)

const resultTwo = (prince: number) => {
  console.log(`Valor ${prince}`)
}

console.log(resultTwo(add(8, 2)))

let itemInput: unknown
let itemName: string

itemName = user.firstName
if(itemInput === 'string'){
  itemName = itemInput
}
console.log(itemName)

const generateError = (msg: string, code: number): never => {
  throw { msg: msg, error: code }
}
let error = generateError('Deu error', 404)
console.log(error)