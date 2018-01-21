
import Crossword from "./crossword";
import {injectStyle} from "../util/util";

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
        let cxwdSuffix = '-block-cxwd';
        crossword.createElement('div');
        crossword.getElementsByTagName('div').id = this.domNode+cxwdSuffix;
        crossword = document.getElementById(this.domNode+cxwdSuffix);
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                crossword.createElement('div');
            }
        }
        BlockCrossword.gridCrossword(crossword.getAttribute('id'));
    }

    static gridCrossword(crosswordDomNode) {
        injectStyle(crosswordDomNode, []);
    }
}