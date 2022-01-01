import Validator from '../validator';

test.each([
  ['Alina', true],
  ['Mamba21', false],
  ['-Mamba21', false],
  ['_Sovaa', false],
  ['Live_', false],
  ['Mamba-', false],
  ['Line6666n', false],
  ['Line668ln', true],
  ['Al_-gI', true],
  ['Al___G', true],
  ['18yes', false],
  ['map12Ron', true],
  ['Mn---P', true],
  ['Mem#@cos', false],
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});