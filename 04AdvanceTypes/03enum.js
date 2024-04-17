"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seatAllotment;
(function (seatAllotment) {
    seatAllotment[seatAllotment["AISLE"] = 0] = "AISLE";
    seatAllotment[seatAllotment["MIDDLE"] = 1] = "MIDDLE";
    seatAllotment[seatAllotment["WINDOW"] = 2] = "WINDOW";
})(seatAllotment || (seatAllotment = {}));
var Awardy;
(function (Awardy) {
    Awardy["First"] = "first";
    Awardy["Second"] = "second";
    Awardy["Third"] = "third";
})(Awardy || (Awardy = {}));
var seat = seatAllotment.AISLE;
seat = seatAllotment.MIDDLE;
// seat = 'crew' //  error
var award = Awardy[0];
award = Awardy.Third;
/** THIS IS PROBLEM CREATION */
award = Awardy[5];
var proff = 0 /* Proff.DEVELOPER */;
