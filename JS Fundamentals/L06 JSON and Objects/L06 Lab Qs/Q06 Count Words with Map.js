function countWords(input) {
    let pattern = /[A-Za-z0-9_]+/gmi;
    let matches = pattern.exec(input);
    
    let map = new Map();
    while (matches) {
        let current = matches[0].toLowerCase();
        if(!map.has(current)) {
            map.set(current, 1);
        }
        else{
            map.set(current, map.get(current) + 1);
        }

        matches = pattern.exec(input);
    }

    let sortedKeys = Array.from(map.keys()).sort((a,b) => a.localeCompare(b));
    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${map.get(key)} times`);
    }
}

countWords("Far too slow, you're far too slow.");