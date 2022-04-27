const addTwoDigits = (n: number): any => {
  const number = n.toString().split("");

  return number.reduce((a: string, b: string) => {
    return parseInt(a) + parseInt(b);
  });
};

console.log(addTwoDigits(45)); // 9
