/**
 * @author WMXPY
 * @namespace Geometry
 * @description Arrange
 */

import { getNearestCoordinateByLinearDistance, getNearestObjectByLinearDistance } from "./calculate";
import { Coordinate, GetCoordinateFunction } from "./declare";


export const arrangeCoordinateByLinearDistance = (start: Coordinate, destinations: Coordinate[]): Coordinate[] => {

    const destinationsSet: Set<Coordinate> = new Set(destinations);
    const result: Coordinate[] = [];

    while (destinationsSet.size > 0) {

        const currentStart: Coordinate = result.length === 0 ? start : result[result.length - 1];
        const next: Coordinate | null = getNearestCoordinateByLinearDistance(currentStart, [...destinationsSet]);

        if (next !== null) {
            result.push(next);
            destinationsSet.delete(next);
        } else {
            return result;
        }
    }
    return result;
};

export const arrangeObjectByLinearDistance = <T extends any>(
    start: Coordinate,
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): T[] => {

    const objectSet: Set<T> = new Set(objects);
    const result: T[] = [];

    while (objectSet.size > 0) {

        const currentStart: Coordinate = result.length === 0 ? start : getCoordinateFunction(result[result.length - 1]);
        const next: T | null = getNearestObjectByLinearDistance(currentStart, [...objectSet], getCoordinateFunction);

        if (next !== null) {
            result.push(next);
            objectSet.delete(next);
        } else {
            return result;
        }
    }
    return result;
};
