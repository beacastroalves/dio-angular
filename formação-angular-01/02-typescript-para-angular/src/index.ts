type Hero = {
  name: string;
  vulgo: string;
};

function printObject(person: Hero) {
  console.log(person);
};

printObject({
  name: "Bruce Wayne",
  vulgo: "Batman",
});