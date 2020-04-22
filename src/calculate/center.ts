/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Center
 */

import { Coordinate, CoordinateRange, createCoordinate, GetCoordinateFunction } from "../declare/declare";
import { getLinearRangeByCoordinates, getLinearRangeByObjects } from "./range";

export const getLinearCenterByCoordinates = (coordinates: Coordinate[]): Coordinate | null => {

    if (coordinates.length === 0) {
        return null;
    }

    const range: CoordinateRange = getLinearRangeByCoordinates(coordinates);

    const finalLatitude: number = (range.maxLatitude + range.minLatitude) / 2;
    const finalLongitude: number = (range.maxLongitude + range.minLongitude) / 2;

    return createCoordinate(finalLatitude, finalLongitude);
};

export const getLinearCenterByObjects = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): Coordinate | null => {

    if (objects.length === 0) {
        return null;
    }

    const range: CoordinateRange = getLinearRangeByObjects(objects, getCoordinateFunction);

    const finalLatitude: number = (range.maxLatitude + range.minLatitude) / 2;
    const finalLongitude: number = (range.maxLongitude + range.minLongitude) / 2;

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
