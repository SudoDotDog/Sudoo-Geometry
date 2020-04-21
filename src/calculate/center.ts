/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Center
 */

import { Coordinate, createCoordinate, GetCoordinateFunction } from "../declare/declare";

export const getWeightedCenterByCoordinates = (coordinates: Coordinate[]): Coordinate | null => {

    if (coordinates.length === 0) {
        return null;
    }

    const reduced: Coordinate = coordinates.reduce<Coordinate>(
        (previous: Coordinate, current: Coordinate): Coordinate => {

            return {
                latitude: previous.latitude + current.latitude,
                longitude: previous.longitude + current.longitude,
            };
        }, {
            latitude: 0,
            longitude: 0,
        } as Coordinate,
    );

    const finalLatitude: number = reduced.latitude / coordinates.length;
    const finalLongitude: number = reduced.longitude / coordinates.length;

    return createCoordinate(finalLatitude, finalLongitude);
};

export const getWeightedCenterByObjects = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): Coordinate | null => {

    if (objects.length === 0) {
        return null;
    }

    const reduced: Coordinate = objects.reduce<Coordinate>(
        (previous: Coordinate, current: T): Coordinate => {

            const coordinate: Coordinate = getCoordinateFunction(current);
            return {
                latitude: previous.latitude + coordinate.latitude,
                longitude: previous.longitude + coordinate.longitude,
            };
        }, {
            latitude: 0,
            longitude: 0,
        } as Coordinate,
    );

    const finalLatitude: number = reduced.latitude / objects.length;
    const finalLongitude: number = reduced.longitude / objects.length;

    return createCoordinate(finalLatitude, finalLongitude);
};
