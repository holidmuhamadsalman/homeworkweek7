const luaskeliling = require("./luas_keliling.js");

const panjang = 6;
const lebar = 5;
const sisi = 8;

console.log(`Luas Persegi: ${luaskeliling.luasPersegi(sisi)}`);
console.log(`Keliling Persegi: ${luaskeliling.kelilingPersegi(sisi)}`);
console.log(`Luas Persegi Panjang: ${luaskeliling.luasPersegiPanjang(panjang, lebar)}`);
console.log(`Keliling Persegi Panjang: ${luaskeliling.kelilingPersegiPanjang(panjang, lebar)}`);
