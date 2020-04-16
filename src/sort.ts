/**
 * @author WMXPY
 * @namespace Geometry
 * @description Sort
 */

import { calculateLinearDistance } from "./calculate";
import { Coordinate } from "./declare";

export const sortCoordinateByLinearDistance = (start: Coordinate, destinations: Coordinate[]): Coordinate[] => {

    const clone: Coordinate[] = [...destinations];

    const result: Coordinate[] = clone.sort((a: Coordinate, b: Coordinate) => {

        const aDistance: number = calculateLinearDistance(start, a);
        const bDistance: number = calculateLinearDistance(start, b);

        if (aDistance > bDistance) {
            return 1;
        } else if (aDistance < bDistance) {
            return -1;
        }
        return 0;
    });

    return result;
};
