/**
 * @author WMXPY
 * @namespace Geometry_Garble
 * @description Random
 */

import { Coordinate, createCoordinate } from "../declare/declare";

export const randomGarbleLocation = (value: number, range: number): number => {

    const difference: number = Math.random() * range;
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const isNegative: boolean = Math.random() < 0.5;

    if (isNegative) {
        return value - difference;
    }
    return value + difference;
};

export const randomGarbleCoordinate = (original: Coordinate, range: number): Coordinate => {

    const latitude: number = randomGarbleLocation(original.latitude, range);
    const longitude: number = randomGarbleLocation(original.longitude, range);

    return createCoordinate(latitude, longitude);
};
