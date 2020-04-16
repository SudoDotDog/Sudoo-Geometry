/**
 * @author WMXPY
 * @namespace Geometry
 * @description Calculate
 */

import { Coordinate, GetCoordinateFunction } from "./declare";

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


export const calculateLinearDistance = (start: Coordinate, end: Coordinate): number => {

    const latitudeDifference: number = Math.abs(start.latitude - end.latitude);
    const longitudeDifference: number = Math.abs(start.longitude - end.longitude);

    const distance: number = Math.sqrt(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2));
    return distance;
};
