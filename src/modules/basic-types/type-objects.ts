let programmer = {
  name: 'Renato',
  age: 24,
};

programmer.name = 'Lucas';
programmer.age = 25;

export function showProgrammer(programmer: {
  name: string;
  age: number;
  skills?: string[];
}) {
  console.log(programmer);
}

showProgrammer({ name: 'renato', age: 24 });
