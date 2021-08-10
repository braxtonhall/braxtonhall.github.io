const random = (low: number, high: number) =>
    low + Math.floor((high - low) * Math.random());

const randomInt = (low: number, high: number): number =>
    Math.floor(random(low, high));

export {random, randomInt};
