const cities = [
    {
      name: 'Skopje',
      population: '600000'
    },
    {
      name: 'Barcelona',
      population: '300000000'
    },
    {
      name: 'Bilbao',
      population: '300000'
    }
  ];
  let minPop=Infinity;
  let nameOfCity="";

  cities.forEach (city=>{
      if (parseInt(city.population)<minPop && parseInt(city.population)>=0){
          minPop=city.population;
          nameOfCity=city.name;
      }
  }
    )
    console.log("City with lowest population is "+nameOfCity+" with "+minPop+" people.");