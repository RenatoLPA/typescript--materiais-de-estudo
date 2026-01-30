type Salary = number | string;

type Programmer = {
  name: string;
  age: number;
  skills?: string[];
  contact: { email: string; phone: string };
  salary?: Salary
};

export function showProgrammer(programmer: Programmer) {
  console.log(programmer);
}

showProgrammer({
  name: 'renato',
  age: 24,
  contact: { email: 'renatolucaspandrade@gmail.com', phone: '81995542121' },
});
