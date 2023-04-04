const checkForColision = (objA, objB) => {
    // console.log(objA);
    // console.log(objB);

    if (objA.position.x < objB.position.x + objB.width && 
        objA.position.x + objA.width > objB.position.x &&
        objA.position.y < objB.position.y + objB.height &&
        objA.height - 5 + objA.position.y > objB.position.y) {
        return true;
    }
    return false;
};

export default checkForColision;

const Inv = {
    "velocity": {
        "x": 0,
        "y": 0
    },
    "image": {},
    "width": 31,
    "height": 39,
    "position": {
        "x": 270,
        "y": 120
    }
}

const Proj = {
    "position": {
        "x": 492.75,
        "y": -2
    },
    "velocity": {
        "x": 0,
        "y": -5
    },
    "radius": 3
}