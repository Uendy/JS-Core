function orderUsernames(input) {
    let uniqueNames = new Set();

    input.forEach(name => {
        uniqueNames.add(name);
    });

    let orderedNames = Array.from(uniqueNames).sort((a, b) => order(a, b));

    for (let name of orderedNames) {
        console.log(name);
    }

    function order(a, b) {
        // You need to order them by their length, in ascending order, as first criteria, 
        if(a.length < b.length){
            return -1;
        }
        if(a.length > b.length){
            return 1;
        }
        
        // and by alphabetical order as second criteria. 
        return a.localeCompare(b);
    }
}

orderUsernames([
    'Ashton', 'Kutcher',
    'Ariel',  'Lilly',
    'Keyden', 'Aizen',
    'Billy',  'Braston'
  ]);