import brain from 'brain.js';

const network = new brain.NeuralNetwork();

network.train([
  {input: {red: 255/255, green: 255/255, blue: 255/255}, output:{light:1}},
  {input: {red: 0/255, green: 0/255, blue: 0/255}, output:{dark:1}},
  {input: {red: 8/255, green: 48/255, blue: 112/255}, output:{dark:1}},
  {input: {red: 82/255, green: 112/255, blue: 8/255}, output:{dark:1}},
  {input: {red: 112/255, green: 31/255, blue: 8/255}, output:{dark:1}},
  {input: {red: 224/255, green: 113/255, blue: 83/255}, output:{light:1}},
  {input: {red: 210/255, green: 175/255, blue: 237/255}, output:{light:1}},
]);

// const result = network.run({red:170/255, green:200/255, blue: 220/255});
const result = (rgb) => {
  console.log('aaaa', rgb);
  let a = network.run(rgb);
  console.log('555555result is', a);
}

export default result;