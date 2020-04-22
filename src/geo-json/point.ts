/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Point
 */

import { reverseTuple } from "../declare/convert";
import { Coordinate, Tuple } from "../declare/declare";

export type GeoJsonPoint = {

    readonly type: "Point";
    readonly coordinates: Tuple;
};

export const createGeoJsonPoint = (coordinate: Coordinate): GeoJsonPoint => {

    return {
        type: 'Point',
        coordinates: [coordinate.longitude, coordinate.latitude],
    };
};

export const convertGeoJsonPointToCoordinate = (point: GeoJsonPoint): Coordinate => {

    const longitude: number = point.coordinates[0];
    const latitude: number = point.coordinates[1];

    return {
        latitude,
        longitude,
    };
};

export const reverseGeoJsonPointTuple = (point: GeoJsonPoint): GeoJsonPoint => {

    return {
        type: 'Point',
        coordinates: reverseTuple(point.coordinates),
    };
};
