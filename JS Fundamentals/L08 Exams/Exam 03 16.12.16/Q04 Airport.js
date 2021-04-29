function generateTraffic(input) {
    let planes = new Set();
    let towns = new Map();

    for (let plane of input) {
      let [ID, town, count, action] = plane.split(" ").filter(x => x !== "" && x !== " ");
      let passengers = Number(count);

      if(action === "depart"){
        if(!planes.has(ID)) {
          continue;
        }
        else{
          planes.delete(ID);
        }
      }
      else{
        // arriving
        if(planes.has(ID)){
          continue;
        }
        else{
          planes.add(ID);
        }
      }

      if(!towns.has(town)){
        towns.set(town, {planes: [], "departures": 0, "arrivals": 0});
      }

      if (!towns.get(town).planes.includes(ID)) {
        towns.get(town).planes.push(ID);
      }

      if (action == "land") {
        towns.get(town).arrivals += passengers;
      } else {
        towns.get(town).departures += passengers;
      }
    }

    console.log("Planes left:");
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`- ${p}`));
    [...towns].sort((t1, t2) => {
        if (t1[1].arrivals < t2[1].arrivals) return 1;
        if (t1[1].arrivals > t2[1].arrivals) return -1;
        return t1[0].localeCompare(t2[0]);
    }).forEach(logData);

    function logData(town) {
      //console.log(`${town[0]} ${town[1].arrivals} ${town[1].departures}`);
      console.log(town[0]);
      console.log(`Arrivals: ${town[1].arrivals}`);
      console.log(`Departures: ${town[1].departures}`);
      console.log("Planes:");
      town[1].planes.sort((p1, p2) => p1.localeCompare(p2)).forEach(p => console.log(`-- ${p}`));
  }
}

generateTraffic([
    'Boeing474 Madrid 300 land',
    'AirForceOne WashingtonDC 178 land',
    'Airbus London 265 depart',
    'ATR72 WashingtonDC 272 land',
    'ATR72 Madrid 135 depart'
  ]);