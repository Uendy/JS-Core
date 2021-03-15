function countOccurances(search, string) {
    let occurances = string.split(search).length - 1;
    console.log(occurances);
}

countOccurances('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')