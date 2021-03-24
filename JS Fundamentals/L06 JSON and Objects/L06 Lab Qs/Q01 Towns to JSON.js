function convertTownsToJSON(input) {
    let result = [];
    let keys = input[0].split(/\s*\|\s*/).filter(x => x !== "");

    for (let string of input.slice(1)) {
        let [town, lat, long] = string.split(/s*\|\s*/).filter(x => x !== "");

        let obj = {};
        obj[keys[0]] = town.trim();
        obj[keys[1]] = Number(lat);
        obj[keys[2]] = Number(long);

        result.push(obj);
    }

    console.log(JSON.stringify(result));
}

convertTownsToJSON([
'| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]);