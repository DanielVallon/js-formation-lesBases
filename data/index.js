const array = ["Paris", "Lyon", "Montreal", "Bordeau"];
const array1 = ["Paris", 33, "Lyon", ["Montreal", "Bordeau"], true];

console.log(array[2][4]);

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}
for (i = 0; i < array1.length; i++) {
  console.log(typeof array1[i]);
}
