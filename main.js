const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
  try {
    const nama = await question('Nama : ');
    const nim = await question('NIM : ');
    const gender = await question('Gender : ');
    const kota = await question('Kota : ');
    if(nama.trim().length > 0 && nim.trim().length > 0 && gender.trim().length >0 && kota.trim().length>0) {
      const data = {
        Nama : nama,
        Nim : nim,
        Gender : gender,
        Kota : kota
      }
      saveData(data)
    }else{
      throw new Error(`empty`);
    }
  } catch (err) {
    console.error('Question rejected', err);
  } finally {
    rl.close()  
  }
}
main()
