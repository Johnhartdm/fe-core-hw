const hurgada = 1;
const taba = 2;
const sharm = 3;

let resort = prompt('Please,choose your resort, from 1-3', 'Taba-1, Sharm-2, Hurgada-3');
console.log(resort);

if (resort === '1' ){
  alert('you choose hurgada');
}else if (resort === '2'){
  alert('you choose taba');
} else if (resort === '3'){
  alert('you choose sharm');
} else {
  alert('wrong number');
}
