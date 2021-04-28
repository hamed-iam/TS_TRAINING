// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "jelte",
//   age: 37,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, 'one', 'two']

enum Role {
  admin = 5,
  readOnly,
  author,
}

const person = {
  name: 'jelte',
  age: 37,
  hobbies: ['sports', 'cooking'],
  role: Role.admin,
};

let favoriteActivities: string[];
favoriteActivities = ['running'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.admin) console.log('enum admin');
