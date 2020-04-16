/**
 * @author WMXPY
 * @namespace Geometry
 * @description Arrange
 */

import { getNearestCoordinateByLinearDistance } from "./calculate";
import { Coordinate } from "./declare";

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
