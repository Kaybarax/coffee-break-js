
import Crossword from "./crossword";

export default class BlockCrossword extends Crossword {

    constructor(domNode, numberOfRows, numberOfColumns) {
        super(domNode, numberOfRows, numberOfColumns);
        // this.createCrossword();
    }

    // domNode = '';//DOM node where crossword will be plugged

    // cell = {row, column};
    inactiveCells = [];
    activeCells = [];

    declareActiveCells(activeCells) {
        this.activeCells = activeCells;
    }

    declareInactiveCells(inactiveCells) {
        this.inactiveCells = inactiveCells;
    }

    assignCellNumber() {}

    createCrossword() {

        let crossword = document.getElementById(this.domNode);
        crossword.createElement('div');
        crossword.getElementsByTagName('div').id = this.domNode+'cxwd';
        crossword = document.getElementById(this.domNode+'cxwd');
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                crossword.createElement('div');
            }
        }

    }

    gridCrossword(divNode) {
        let divNode = document.getElementById(divNode);
        divNode.setAttribute('class', 'crossword-grid');
    }
}