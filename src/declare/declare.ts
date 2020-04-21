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

export type Coordinate = {

    readonly latitude: number;
    readonly longitude: number;
};

export type LatLng = {

    readonly lat: number;
    readonly lng: number;
};

export type Tuple = [number, number];

export type GetCoordinateFunction<T extends any> = (object: T) => Coordinate;
