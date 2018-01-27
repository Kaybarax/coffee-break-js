
import Crossword from "./crossword";
import {getDomNode, injectStyle} from "../util/util";

export default class BlockCrossword extends Crossword {

    constructor(domNode, numberOfRows, numberOfColumns) {
        super(domNode, numberOfRows, numberOfColumns);
        // this.createCrossword();
        this.inactiveCells = [];
        this.activeCells = [];
        this.cell = {};
    }

    declareActiveCells(activeCells) {
        this.activeCells = activeCells;
    }

    declareInactiveCells(inactiveCells) {
        this.inactiveCells = inactiveCells;
    }

    assignCellNumber() {}

    createCrossword() {
        console.log("sth");
        let crossword = getDomNode(this.domNode);
        let cxwdSuffix = '-block-cxwd';
        crossword.innerHTML = '';//clear anything that was in there
        crossword.createElement('div');
        crossword.getElementsByTagName('div').id = this.domNode+cxwdSuffix;
        crossword = getDomNode(this.domNode+cxwdSuffix);
        for (let i = 0; i < this.numberOfRows; i++) {
            for (let j = 0; j < this.numberOfColumns; j++) {
                crossword.createElement('div');
            }
        }
        // BlockCrossword.gridCrossword(crossword.getAttribute('id'));
    }

    static gridCrossword(crosswordDomNode) {
        injectStyle(crosswordDomNode, []);
    }
}