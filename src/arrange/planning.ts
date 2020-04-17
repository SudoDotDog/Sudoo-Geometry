/**
 * @author WMXPY
 * @namespace Geometry_Arrange
 * @description Planning
 */

import { getNearestCoordinateByLinearDistance, getNearestObjectByLinearDistance } from "../calculate";
import { Coordinate, GetCoordinateFunction } from "../declare";

export type PlanningResult = {

    readonly coordinate: Coordinate;
    readonly distance: number;
};

export type ObjectPlanningResult<T> = {

    readonly object: T;
    readonly distance: number;
};

export const arrangePlannedCoordinateByLinearDistance = (start: Coordinate, destinations: Coordinate[]): PlanningResult[] => {

    const destinationsSet: Set<Coordinate> = new Set(destinations);
    const result: PlanningResult[] = [];

    while (destinationsSet.size > 0) {

        const currentStart: Coordinate = result.length === 0 ? start : result[result.length - 1].coordinate;
        const next: Coordinate | null = getNearestCoordinateByLinearDistance(currentStart, [...destinationsSet]);

        if (next !== null) {
            result.push({
                distance: 0,
                coordinate: next,
            });
            destinationsSet.delete(next);
        } else {
            return result;
        }
    }
    return result;
};

export const arrangePlannedObjectByLinearDistance = <T extends any>(
    start: Coordinate,
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): Array<ObjectPlanningResult<T>> => {

    const objectSet: Set<T> = new Set(objects);
    const result: Array<ObjectPlanningResult<T>> = [];

    while (objectSet.size > 0) {

        const currentStart: Coordinate = result.length === 0 ? start : getCoordinateFunction(result[result.length - 1].object);
        const next: T | null = getNearestObjectByLinearDistance(currentStart, [...objectSet], getCoordinateFunction);

        if (next !== null) {
            result.push({
                distance: 0,
                object: next,
            });
            objectSet.delete(next);
        } else {
            return result;
        }
    }
    return result;
};
