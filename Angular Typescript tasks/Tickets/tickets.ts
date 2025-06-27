class Tickets {
    destination: string;
    price: number;
    status: string;

    constructor(
        destination: string,
        price: number,
        status: string
    ) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    static ticketManager(arr: string[], sortingCriteria: keyof Tickets): Tickets[] {
    let ticketsArr: Tickets[] = [];

    for (const curEl of arr) {
        let tokens = curEl.split('|');
        let [destination, price, status] = tokens;

        ticketsArr.push(new Tickets(destination, Number(price), status));
    }

    ticketsArr.sort((a, b) => {
        let valueA = a[sortingCriteria];
        let valueB = b[sortingCriteria];

        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return valueA - valueB;
        }
        else {
            return String(valueA).localeCompare(String(valueB));
        }
    });

    return ticketsArr;
}
}

let arrData: string[] = [

    'Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'

]

let criteria: keyof Tickets = 'destination';

let result = Tickets.ticketManager(arrData, criteria);
console.log(result);
