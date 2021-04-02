function printNestedSystem(input) {
    let wholeSystem = new Map();

    input.forEach(line => {
        let [system, component, sub] = line.split(" | ").filter(x => x !== '');

        let newSystem = !wholeSystem.has(system);
        if(newSystem){ 
            wholeSystem.set(system, new Map());
        }
        
        let newComponent = !wholeSystem.get(system).has(component);
        if(newComponent){
            wholeSystem.get(system).set(component, []);
        }

        wholeSystem.get(system).get(component).push(sub);
    });    

    function sortSystem(a, b, wholeSystem) {
        // Sort them
        // The Systems you’ve stored must be ordered by amount of components, in descending order, as first criteria,
        // and by alphabetical order as second criteria. 
        let aKey = wholeSystem.get(a).size;
        let bKey = wholeSystem.get(b).size;
        if(aKey > bKey){
            return -1;
        }
        if(aKey < bKey){
            return 1;
        }
        
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    let orderedSystems = [...wholeSystem.keys()].sort((a, b) => sortSystem(a, b, wholeSystem));
    for (let system of orderedSystems) {
        console.log(system);

        let prefix = "|||";
        
        // The Components must be ordered by amount of Subcomponents, in descending order.
        let orderedComponent = [...wholeSystem.get(system).keys()].sort((a, b) => wholeSystem.get(system).get(b).length - wholeSystem.get(system).get(a).length);
        for (let component of orderedComponent) {
            console.log(prefix + component);

            for (let subcomponent of wholeSystem.get(system).get(component)) {
                console.log(prefix + prefix + subcomponent);
            }
        }
    }
}

printNestedSystem([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ]);