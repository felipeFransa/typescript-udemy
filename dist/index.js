"use strict";
// Dia 1
const add = (n1, n2) => {
    return n1 + n2;
};
let result = add(4, 5);
console.log(result);
// Dia 2
let values = [1, 2, 3, 4, 5];
let people = ['Felipe', 'Silva', 'Franca'];
let items = ['Felipe', 26, true];
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Felipe',
    age: 26,
    role: Role.admin
};
console.log(user);
const resultTwo = (prince) => {
    console.log(`Valor ${prince}`);
};
console.log(resultTwo(add(8, 2)));
let itemInput;
let itemName;
itemName = user.firstName;
if (itemInput === 'string') {
    itemName = itemInput;
}
console.log(itemName);
const generateError = (msg, code) => {
    throw { msg: msg, error: code };
};
let error = generateError('Deu error', 404);
console.log(error);
