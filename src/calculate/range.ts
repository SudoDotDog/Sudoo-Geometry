/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Range
 */

import { Coordinate, CoordinateRange, createCoordinate, GetCoordinateFunction } from "../declare/declare";

export const getLinearCenterByCoordinates = (coordinates: Coordinate[]): Coordinate | null => {

    if (coordinates.length === 0) {
        return null;
    }

    const reduced: CoordinateRange = coordinates.reduce<CoordinateRange>(
        (previous: CoordinateRange, current: Coordinate): CoordinateRange => {

            return {
                maxLatitude: Math.max(previous.maxLatitude, current.latitude),
                minLatitude: Math.min(previous.minLatitude, current.latitude),
                maxLongitude: Math.max(previous.maxLongitude, current.longitude),
                minLongitude: Math.min(previous.minLongitude, current.longitude),
            };
        }, {
            maxLatitude: -Infinity,
            minLatitude: Infinity,
            maxLongitude: -Infinity,
            minLongitude: Infinity,
        } as CoordinateRange,
    );

    const finalLatitude: number = (reduced.maxLatitude + reduced.minLatitude) / 2;
    const finalLongitude: number = (reduced.maxLongitude + reduced.minLongitude) / 2;

    return createCoordinate(finalLatitude, finalLongitude);
};

export const getLinearCenterByObjects = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): Coordinate | null => {

    if (objects.length === 0) {
        return null;
    }

    const reduced: CoordinateRange = objects.reduce<CoordinateRange>(
        (previous: CoordinateRange, current: T): CoordinateRange => {

            const coordinate: Coordinate = getCoordinateFunction(current);

            return {
                maxLatitude: Math.max(previous.maxLatitude, coordinate.latitude),
                minLatitude: Math.min(previous.minLatitude, coordinate.latitude),
                maxLongitude: Math.max(previous.maxLongitude, coordinate.longitude),
                minLongitude: Math.min(previous.minLongitude, coordinate.longitude),
            };
        }, {
            maxLatitude: -Infinity,
            minLatitude: Infinity,
            maxLongitude: -Infinity,
            minLongitude: Infinity,
        } as CoordinateRange,
    );

    const finalLatitude: number = (reduced.maxLatitude + reduced.minLatitude) / 2;
    const finalLongitude: number = (reduced.maxLongitude + reduced.minLongitude) / 2;

    return createCoordinate(finalLatitude, finalLongitude);
};

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
