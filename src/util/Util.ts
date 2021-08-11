import React from "react";

const random = (low: number, high: number) =>
    low + ((high - low) * Math.random());

const randomInt = (low: number, high: number): number =>
    Math.floor(random(low, high));

const randomTransition = (low: number, high: number): string =>
    randomInt(700, 800) + "ms cubic-bezier(0.57,0.35,0.54,1.15)";

const clickLink = (link: string) => (event: React.MouseEvent): void => {
    event.preventDefault();
    window.open(link, "_blank");
};

export {random, randomInt, randomTransition, clickLink};
