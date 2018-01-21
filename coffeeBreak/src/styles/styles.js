
const blockCXGrids = (cellCount=0) => {
    return {
        display : 'grid',
        gridTemplateColumns : `repeat( ${cellCount}, 1fr )`
    };
};
