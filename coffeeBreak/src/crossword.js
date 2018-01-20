
export default class Crossword {

    constructor(domNode, numberOfRows, numberOfColumns) {
        this.domNode = domNode;
        this.numberOfRows = numberOfRows;
        this.numberOfColumns = numberOfColumns;
    }

    numberOfRows = 0;
    numberOfColumns = 0;
    cellSize = 20;
    domNode = 'root';

    setColsAndRows(cols, rows) {
        this.numberOfColumns = cols;
        this.numberOfRows = rows;
    }

    setCellSize(size) {
        this.cellSize = size;
    }

}
