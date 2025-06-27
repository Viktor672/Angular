abstract class Melon {
    public weight: number;
    public melonSort: string;

    constructor(
        weight: number,
        melonSort: string
    ) {
        this.weight = weight;
        this.melonSort = melonSort;
    }

    get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    abstract get element(): string;

    toString(): string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`.trim();
    }
}

class Watermelon extends Melon {
    constructor(
        weight: number,
        melonSort: string
    ) {
        super(weight, melonSort)
    }

    get element(): string {
        return 'Water';
    }
}

class Firemelon extends Melon {
    constructor(
        weight: number,
        melonSort: string
    ) {
        super(weight, melonSort)
    }

    get element(): string {
        return 'Fire';
    }
}

class Earthmelon extends Melon {
    constructor(
        weight: number,
        melonSort: string
    ) {
        super(weight, melonSort)
    }

    get element(): string {
        return 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(
        weight: number,
        melonSort: string
    ) {
        super(weight, melonSort)
    }

    get element(): string {
        return 'Air';
    }
}

class Melolemonmelon extends Watermelon {
    private elements = ['Water', 'Fire', 'Earth', 'Air'];
    private index = 0;

    morph(): void {
        this.index < 3 ? ++this.index : this.index = 0
    }

    get element(): string {
        return this.elements[this.index];
    }
}

const melo = new Melolemonmelon(12.5, 'Kingsize');

// Element: ${element}

// Sort: Kingsize

// Element Index: 100

console.log(melo.toString()); // Water

console.log('----------');

melo.morph();

console.log(melo.toString()); // Fire

console.log('----------');

melo.morph();

console.log(melo.toString()); // Earth

console.log('----------');

melo.morph();

console.log(melo.toString()); // Air

console.log('----------');

melo.morph();

console.log(melo.toString()); // Water

console.log('----------');

melo.morph();

