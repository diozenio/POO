abstract class Piece {
    position: Array<number>;

    constructor(position: Array<number>) {
        this.position = position;
    }

    abstract move(newPosition: Array<number>): void;
}

class Pawn extends Piece {
    move(newPosition: Array<number>): void {
        console.log('Pawn move');
        this.position = newPosition;
    }
}

class Rook extends Piece {
    move(newPosition: Array<number>): void {
        console.log('Rook move');
        this.position = newPosition;
    }
}

const pawn = new Pawn([1, 2]);
pawn.move([2, 3]);
console.log(pawn.position);

const rook = new Rook([1, 2]);
rook.move([4, 5]);
console.log(rook.position);