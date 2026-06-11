type Salary = number | string;

type Programmer = {
  name: string;
  age: number;
  skills?: string[]; //o ? significa que é opcional, nem todo programador tem essa opção.
  contact: { email: string; phone: string };
  salary?: Salary    //o ? significa que é opcional, nem todo programador tem essa opção.
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer({
  name: 'renato',
  age: 24,
  contact: { email: 'renatolucaspandrade@gmail.com', phone: '81995542121' },
});
