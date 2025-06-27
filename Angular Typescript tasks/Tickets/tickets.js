var Tickets = /** @class */ (function () {
    function Tickets(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    Tickets.ticketManager = function (arr, sortingCriteria) {
        var ticketsArr = [];
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var curEl = arr_1[_i];
            var tokens = curEl.split('|');
            var destination = tokens[0], price = tokens[1], status_1 = tokens[2];
            ticketsArr.push(new Tickets(destination, Number(price), status_1));
        }
        ticketsArr.sort(function (a, b) {
            var valueA = a[sortingCriteria];
            var valueB = b[sortingCriteria];
            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return valueA - valueB;
            }
            else {
                return String(valueA).localeCompare(String(valueB));
            }
        });
        return ticketsArr;
    };
    return Tickets;
}());
var arrData = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];
var criteria = 'destination';
var result = Tickets.ticketManager(arrData, criteria);
console.log(result);
