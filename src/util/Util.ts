const random = (low: number, high: number) =>
    low + ((high - low) * Math.random());

const randomInt = (low: number, high: number): number =>
    Math.floor(random(low, high));

const randomTransition = (low: number, high: number): string =>
    randomInt(low, high) + "ms cubic-bezier(0.57,0.35,0.54,1.15)";

export {random, randomInt, randomTransition};
