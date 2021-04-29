function generateTraffic(input) {
    let planes = new Set();
    let towns = new Map();

    input.forEach(plane => {
      let [ID, town, count, action] = plane.split(" ").filter(x => x !== "" && x !== " ");
      let passengers = Number(count);
    });
    
}

generateTraffic([
    'Boeing474 Madrid 300 land',
    'AirForceOne WashingtonDC 178 land',
    'Airbus London 265 depart',
    'ATR72 WashingtonDC 272 land',
    'ATR72 Madrid 135 depart'
  ]);