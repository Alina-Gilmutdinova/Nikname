//латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
//Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться 
//цифрами, символами подчёркивания или тире
export default class Validator {
   static validateUsername(name) {
     const regex = new RegExp('^[a-zA-Z]+[0-9]{0,3}_{0,2}\\-{0,2}[a-zA-Z]+$');
     return regex.test(name);
   }
 }