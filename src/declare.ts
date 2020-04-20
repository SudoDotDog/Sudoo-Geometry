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

export const convertLatitudeToString = (latitude: number): string => {

    if (latitude >= 0) {
        return `${latitude}N`;
    }
    return `${Math.abs(latitude)}S`;
};

export const convertLongitudeToString = (longitude: number): string => {

    if (longitude >= 0) {
        return `${longitude}E`;
    }
    return `${Math.abs(longitude)}W`;
};

export const convertCoordinateToString = (coordinate: Coordinate): string => {

    const latitude: string = convertLatitudeToString(coordinate.latitude);
    const longitude: string = convertLongitudeToString(coordinate.longitude);
    return `${latitude}:${longitude}`;
};

export const convertLatLngToString = (latLng: LatLng): string => {

    const latitude: string = convertLatitudeToString(latLng.lat);
    const longitude: string = convertLongitudeToString(latLng.lng);
    return `${latitude}:${longitude}`;
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
