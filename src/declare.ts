/**
 * @author WMXPY
 * @namespace Geometry
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

export const covertCoordinateToLatLng = (coordinate: Coordinate): LatLng => {

    return {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
    };
};

export const covertLatLngToCoordinate = (latLng: LatLng): Coordinate => {

    return {
        latitude: latLng.lat,
        longitude: latLng.lng,
    };
};

export type Coordinate = {

    readonly latitude: number;
    readonly longitude: number;
};

export type LatLng = {

    readonly lat: number;
    readonly lng: number;
};

export type GetCoordinateFunction<T extends any> = (object: T) => Coordinate;
