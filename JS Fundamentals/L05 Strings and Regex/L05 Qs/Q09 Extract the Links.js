function getLinks(input) {
    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g;

    let matches = pattern.exec(input);
    while (matches) {
        console.log(matches[0]);
        matches = pattern.exec(input);
    }
}

getLinks(["Join WebStars now for free, at www.web-stars.com",
    "You can also support our partners:",
    "Internet - www.internet.com",
    "WebSpiders - www.webspiders101.com",
    "Sentinel - www.sentinel.-ko"
]);