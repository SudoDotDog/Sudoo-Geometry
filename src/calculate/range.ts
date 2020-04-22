/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Range
 */

import { Coordinate, CoordinateRange, createInfinityRange, GetCoordinateFunction } from "../declare/declare";

export const getLinearRangeByCoordinates = (coordinates: Coordinate[]): CoordinateRange => {

    const reduced: CoordinateRange = coordinates.reduce<CoordinateRange>(
        (previous: CoordinateRange, current: Coordinate): CoordinateRange => {

            return {
                maxLatitude: Math.max(previous.maxLatitude, current.latitude),
                minLatitude: Math.min(previous.minLatitude, current.latitude),
                maxLongitude: Math.max(previous.maxLongitude, current.longitude),
                minLongitude: Math.min(previous.minLongitude, current.longitude),
            };
        },
        createInfinityRange(),
    );

    return reduced;
};

export const getLinearRangeByObjects = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): CoordinateRange => {

    const reduced: CoordinateRange = objects.reduce<CoordinateRange>(
        (previous: CoordinateRange, current: T): CoordinateRange => {

            const coordinate: Coordinate = getCoordinateFunction(current);

            return {
                maxLatitude: Math.max(previous.maxLatitude, coordinate.latitude),
                minLatitude: Math.min(previous.minLatitude, coordinate.latitude),
                maxLongitude: Math.max(previous.maxLongitude, coordinate.longitude),
                minLongitude: Math.min(previous.minLongitude, coordinate.longitude),
            };
        },
        createInfinityRange(),
    );

    return reduced;
};
