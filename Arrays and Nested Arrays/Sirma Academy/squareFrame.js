function squareFrame(n) {
    for (let i = 0; i < n; i++) {
        let row = "";

        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) { 
                if (j === 0 || j === n - 1) {
                    row += "+";
                } else {
                    row += "-";
                }
            } else { 
                if (j === 0 || j === n - 1) {
                    row += "|";
                } else {
                    row += "-";
                }
            }
        }
        console.log(row);
    }
}


squareFrame(3)

