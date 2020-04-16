/**
 * @author WMXPY
 * @namespace Geometry
 * @description Calculate
 */

import { Coordinate } from "./declare";

type NearestCoordinateStatus = {

    readonly coordinate: Coordinate | null;
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

export const calculateLinearDistance = (start: Coordinate, end: Coordinate): number => {

    const latitudeDifference: number = Math.abs(start.latitude - end.latitude);
    const longitudeDifference: number = Math.abs(start.longitude - end.longitude);

    const distance: number = Math.sqrt(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2));
    return distance;
};
