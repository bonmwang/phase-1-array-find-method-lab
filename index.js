function superbowlWin(record) {
    // Use find() to locate the first object where result is "W"
    const win = record.find((game) => game.result === "W");
    // If a win is found, return the year; otherwise, return undefined
    return win ? win.year : undefined;
}

const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
];
console.log(superbowlWin(record));
 