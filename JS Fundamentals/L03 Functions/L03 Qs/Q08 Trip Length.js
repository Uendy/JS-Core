function findLength(input) {
    let x1 = input[0];
    let y1 = input[1];

    let x2 = input[2];
    let y2 = input[3];

    let x3 = input[4];
    let y3 = input[5];

    function findDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    let distance1To2 = findDistance(x1, y1, x2, y2);
    let distance2To3 = findDistance(x2, y2, x3, y3);
    let distance1To3 = findDistance(x1, y1, x3, y3);
    
    if ((distance1To2 <= distance1To3) && (distance1To3 >= distance2To3)) {
        let dist = distance1To2 + distance2To3;
         console.log('1->2->3: ' + dist);
     }
     else if ((distance1To2 <= distance2To3) && (distance1To3 < distance2To3)) {
         let dist = distance1To3 + distance1To2;
         console.log('2->1->3: '+ dist);
     }
     else {
         let dist = distance2To3 + distance1To3;
         console.log('1->3->2: ' + dist);
     }
}