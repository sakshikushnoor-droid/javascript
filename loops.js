/* Name : Ratna Sakshi Kushnoor, Date Nov 8, 2026 */
"use strict";

console.log("Javascript is successfully  linked!")

for (let crate = 1; crate <=20;crate++) {

    if (crate % 5 === 0) {
        console.log(`Crate ${crate}: Handle with care`);
    }
    else if (crate % 2 === 0) {
        console.log (`Crate ${crate}: Load Crate`);
    }
    else {
        console.log(`Crate ${crate}: Inspect crate`);
    }
}

console.log("Total crates scanned: 20");