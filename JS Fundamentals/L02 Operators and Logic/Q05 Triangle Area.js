function calculateTriangleArea(a, b, c) {
    let p = (a + b + c) / 2; // getting perimeter
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return area;
}

console.log(calculateTriangleArea(2, 3.5, 4));