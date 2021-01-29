var pets = ['cat', 'dog', 'rat'];
pets.forEach((element, index) => {
  pets[index] = element + 's';
});
console.log(pets);