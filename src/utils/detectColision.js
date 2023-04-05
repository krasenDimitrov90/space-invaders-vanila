export const detectColision = (objA, objB) => {
    if (objA.position.x < objB.position.x + objB.width &&
        objA.position.x + objA.width > objB.position.x &&
        objA.position.y < objB.position.y + objB.height &&
        objA.height + objA.position.y > objB.position.y) {
        return true;
    }
    return false;
};