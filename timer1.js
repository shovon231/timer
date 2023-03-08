let userInputs = process.argv.slice(2);
let input = "";

let argConverter = function (userInputs) {
  let result = [];
  for (let input of userInputs) {
    input = Number(input);
    if (!isNaN(input) && input > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, input * 1000);
    }
  }
  return result;
};
