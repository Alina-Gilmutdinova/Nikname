import Validator from '../validator';

test.each([
  ['Alina', true],
  ['Mamba21', false],
  ['-Mamba21', false],
  ['_Sovaa', false],
  ['Live_', false],
  ['Mamba-', false],
  ['Line666ln', false],
  ['Line668ln', true],
  ['Al_-gI', true],
  ['Al___G', false],
  ['18yes', false],
  ['map12Ron', true],
  ['Mn---P', false],
  ['Mem#@cos', false],
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});