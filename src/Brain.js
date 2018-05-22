import React from 'react';
import brain from 'brain.js';
import MyContext from './MyContext';

const network = new brain.NeuralNetwork();

network.train([
  {input: {b: 255/255, g: 255/255, r: 255/255}, output:{light:1}},
  {input: {b: 0/255, g: 0/255, r: 0/255}, output:{dark:1}},
  {input: {b: 8/255, g: 48/255, r: 112/255}, output:{dark:1}},
  {input: {b: 82/255, g: 112/255, r: 8/255}, output:{dark:1}},
  {input: {b: 112/255, g: 31/255, r: 8/255}, output:{dark:1}},
  {input: {b: 224/255, g: 113/255, r: 83/255}, output:{light:1}},
  {input: {b: 210/255, g: 175/255, r: 237/255}, output:{light:1}},
]);

const brainResult = (a) => {
  console.log('a from Brain ', a);
  return network.run(a);
}

export default brainResult;