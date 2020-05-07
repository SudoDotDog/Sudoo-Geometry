/**
 * @author WMXPY
 * @namespace Geometry_Declare
 * @description Declare
 */

export const createCoordinate = (latitude: number, longitude: number): Coordinate => {

    return {
        latitude,
        longitude,
    };
};

export const createLatLng = (latitude: number, longitude: number): LatLng => {

    return {
        lat: latitude,
        lng: longitude,
    };
};

export const createTuple = (latitude: number, longitude: number): Tuple => {

    return [latitude, longitude];
};

export const createInfinityRange = (): CoordinateRange => {

    return {
        maxLatitude: -Infinity,
        minLatitude: Infinity,
        maxLongitude: -Infinity,
        minLongitude: Infinity,
    };
};

export type Coordinate = {

    readonly latitude: number;
    readonly longitude: number;
};

export type CoordinateRange = {

    readonly maxLatitude: number;
    readonly minLatitude: number;
    readonly maxLongitude: number;
    readonly minLongitude: number;
};

export type LatLng = {

    readonly lat: number;
    readonly lng: number;
};

export type Tuple = [number, number];

export type PolygonCoordinate = Coordinate[][];
export type MultiPolygonCoordinate = Coordinate[][][];

export type PolygonLatLng = LatLng[][];
export type PolygonTuple = Tuple[][];
export type MultiPolygonTuple = Tuple[][][];

export type GetCoordinateFunction<T extends any> = (object: T) => Coordinate;
