
//fetch data from the API
fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
  // mode:'no-cors'
})
.then((res) => res.json())
.then((data) => 
{
  //access each object and print out the data from the API
  console.log(`Name:\n${data.name}\n\nWeight:\n${data.weight}\n\nAbilities:`)
  console.log(data.abilities)
}),
(error) => { 
  console.log(error)
}
