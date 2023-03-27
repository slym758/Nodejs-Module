const pi = 3.14;
// let value = process.argv.slice(2);

function circleArea(radius) {
  const Area = pi * (radius * radius);
  console.log(`Circle Area: ${Area}`);
}

function circleCircumference(radius) {
  const Circumference = 2 * pi * radius;
  console.log(`Circle Circumference: ${Circumference}`);
}

module.exports = {
  circleArea,
  circleCircumference,
};
