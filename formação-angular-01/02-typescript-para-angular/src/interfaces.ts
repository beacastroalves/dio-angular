type robot1 = {
  readonly id: number | string;
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;
}

const bot1: robot1 = {
  id: "1",
  name: 'megaman',
};

const bot2: robot2 = {
  id: "1",
  name: 'megaman',
};
bot1.name = "megazord"
console.log(bot1);
console.log(bot2);