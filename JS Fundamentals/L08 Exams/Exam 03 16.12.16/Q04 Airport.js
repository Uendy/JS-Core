function generateTraffic(input) {
    let planes = new Map();
    let towns = new Map();

    input.forEach(plane => {
      let [ID, town, passengers, action] = plane.split(" ");
      
      if(!(planes.has(ID) && action === "land") || !(!planes.has(ID) && action === "depart")){
        let currentPlane = {"town": town, "passengers": passengers};
        
        if(action === "depart"){
          planes.delete(ID);
          if(towns.has(town)){
            // update and add this
            let currentTown = towns.get(town);
            currentTown.departures += passengers;
            currentTown.planes.add(ID);
            towns.set(town, currentTown);
          }
          else{
            // set the town as a destination
            towns.set(town, {
              "arrivals": passengers,
              "departures": 0,
              "planes": new HashMap(ID)  
            });
          }
        }
      }

    });
}

generateTraffic([
    'Boeing474 Madrid 300 land',
    'AirForceOne WashingtonDC 178 land',
    'Airbus London 265 depart',
    'ATR72 WashingtonDC 272 land',
    'ATR72 Madrid 135 depart'
  ]);