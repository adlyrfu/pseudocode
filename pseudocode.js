// tugas nomer 1
function menghitungluaspersegipanjang (panjang, lebar ) {
    let luas = panjang * lebar ;
    return luas
}
console.log(menghitungluaspersegipanjang(20, 10));

//tugas nomer 2
let jam = 4;
let menit = 4;

function hasiljam(){
  let detik = jam * 3600 ;
  return detik
}
console.log(hasiljam()+' detik')

function hasilmenit(){
  let detik = menit * 60;
  return detik
}
console.log(hasilmenit()+' detik')

//tugas nomer 3
for(var i=1; i<=5;i++){
    if(i%2 !=0){
          console.log(i, "ini bilangan ganjil")

    }else{
      console.log(i, "ini bilangan genap")
    }
}

//tugas nomer 4
let r = 20;
let luasLingkaran = Math.PI * (r * r);

console.log(luasLingkaran);

//tugas nomer 5
var x = 120;
var y = 80;
var z = 140;

if ( x>y & x>z ){
  console.log("terbesar " + x )
}else if (y>x & y>z){
  console.log( "terbesar " + y )
}else{
  console.log("terbesar " + z )
}
if (x<y & x<z){
  console.log("terkecil " + x )
}else if (y<x & y<z){
  console.log("terkecil " + y )
}else{
  console.log("terkecil " + z )
}

function rata_rata(){
   var rata_rata = (x+y+z)/3
   return rata_rata
}
console.log("ini rata ratanya "+rata_rata(x, y, z))
