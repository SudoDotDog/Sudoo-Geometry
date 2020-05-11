/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Nearest
 */

import { Coordinate, GetCoordinateFunction } from "../declare/declare";
import { calculateLinearDistance } from "./distance";

type NearestCoordinateStatus = {

    readonly coordinate: Coordinate | null;
    readonly distance: number;
};

type NearestObjectStatus<T> = {

    readonly object: T | null;
    readonly distance: number;
};

export const getNearestCoordinateByLinearDistance = (start: Coordinate, destinations: Coordinate[]): Coordinate | null => {

    if (destinations.length === 0) {
        return null;
    }

    const reduced: NearestCoordinateStatus = destinations.reduce<NearestCoordinateStatus>(
        (previous: NearestCoordinateStatus, current: Coordinate): NearestCoordinateStatus => {

            const distance: number = calculateLinearDistance(start, current);
            if (distance < previous.distance) {
                return {
                    coordinate: current,
                    distance,
                };
            }
            return previous;
        }, {
            coordinate: null,
            distance: Infinity,
        } as NearestCoordinateStatus,
    );

    return reduced.coordinate;
};

export const getNearestObjectByLinearDistance = <T extends any>(
    start: Coordinate,
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): T | null => {

    if (objects.length === 0) {
        return null;
    }

    const reduced: NearestObjectStatus<T> = objects.reduce<NearestObjectStatus<T>>(
        (previous: NearestObjectStatus<T>, current: T): NearestObjectStatus<T> => {

            const coordinate: Coordinate = getCoordinateFunction(current);
            const distance: number = calculateLinearDistance(start, coordinate);
            if (distance < previous.distance) {
                return {
                    object: current,
                    distance,
                };
            }
            return previous;
        }, {
            object: null,
            distance: Infinity,
        } as NearestObjectStatus<T>,
    );

    return reduced.object;
};
