function swag(input) {
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

    // Sort them
}

swag([
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