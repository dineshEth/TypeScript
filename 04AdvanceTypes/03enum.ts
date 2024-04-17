enum seatAllotment {
    AISLE,
    MIDDLE,
    WINDOW
}

enum Awardy {
    First = 'first',
    Second = 'second',
    Third = 'third'
}

// Less js code generates
const enum Proff {
    DEVELOPER,
    MANAGER,
    HR
}

let seat : seatAllotment = seatAllotment.AISLE;
seat = seatAllotment.MIDDLE
// seat = 'crew' //  error

let award : Awardy = Awardy[0];
award = Awardy.Third;

/** THIS IS PROBLEM CREATION */
award = Awardy[5];


let proff :  Proff = Proff.DEVELOPER

export {}