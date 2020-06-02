// "3123123.00" -> "3 123 123.00"

const prettifyNumber = number => {
  if (!number) {
    return "0";
  }

  const decimal = String(number).split(".")[1];
  const divider = ".";
  const integer = [...String(number).slice(0, -3)].reduceRight((acc, item, index) => {
    if (!(index % 3)) {
      return item + " " + acc;
    }

    return item + acc;
  }, "").slice(0, -1);

  return `${integer}${divider}${decimal}`;
};

console.log(prettifyNumber("3123123.00"));
