export const detectColision = (objA, objB) => {
    let first = objA.getBoundingClientRect();
    let second = objB.getBoundingClientRect();

    let hasCollision = !(first.top > second.bottom || first.bottom < second.top || first.right < second.left || first.left > second.right)

    return hasCollision;
};