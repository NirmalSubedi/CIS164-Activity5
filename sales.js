"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// calculate totals by quarter, Define constant and use a for loop
const quarterTotals = [0, 0, 0, 0];
for (let i = 0; i < quarterTotals.length; i++) {
    quarterTotals[i] = region1[i] + region2[i] + region3[i] + region4[i] + region5[i];
}

// display totals by quarter, document write and use a for loop
document.write("<h2>Sales by Quarter</h2>");
let displayQuarterTotals = "";
for (let i = 0; i < quarterTotals.length; i++) {
    displayQuarterTotals += `Q${i + 1}: $${quarterTotals[i]}<br>`;
}
document.write(displayQuarterTotals);

// calculate totals by region, define constant and use a for loop
const regionTotals = [0, 0, 0, 0, 0];
for (let i = 0; i < quarterTotals.length; i++) {
    regionTotals[0] += region1[i];
    regionTotals[1] += region2[i];
    regionTotals[2] += region3[i];
    regionTotals[3] += region4[i];
    regionTotals[4] += region5[i];
}
    
// display totals by region, document write and use a for loop with a
// document write in the loop.
document.write("<h2>Sales by Region</h2>");
let displayRegionTotals = "";
for (let i = 0; i < regionTotals.length; i++) {
    displayRegionTotals += `Region ${i + 1}: $${regionTotals[i]}<br>`;
}
document.write(displayRegionTotals);

// calculate total sales, use a for loop to add all the quarter totals
// together.
let totalSales = 0;
for (let i = 0; i < quarterTotals.length; i++) {
    totalSales += quarterTotals[i];    
}

// display total sales, use document write to display on html page
document.write("<h2>Total Sales</h2>");
document.write(`$${totalSales}`);


