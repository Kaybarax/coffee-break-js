
export default class Crossword {

    constructor(domNode, numberOfRows, numberOfColumns) {
        this.domNode = domNode || 'root';
        this.numberOfRows = numberOfRows || 0;
        this.numberOfColumns = numberOfColumns || 0;
    }

    setColsAndRows(cols, rows) {
        this.numberOfColumns = cols;
        this.numberOfRows = rows;
    }

    setCellSize(size) {
        this.cellSize = size;
    }

}
