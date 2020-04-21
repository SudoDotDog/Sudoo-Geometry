/**
 * @author WMXPY
 * @namespace Geometry_Declare
 * @description Convert
 */

import { Coordinate, LatLng, Tuple } from "./declare";

export const convertCoordinateToLatLng = (coordinate: Coordinate): LatLng => {

    return {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
    };
};

export const convertLatLngToCoordinate = (latLng: LatLng): Coordinate => {

    return {
        latitude: latLng.lat,
        longitude: latLng.lng,
    };
};

export const convertCoordinateToTuple = (coordinate: Coordinate): Tuple => {

    return [coordinate.latitude, coordinate.latitude];
};

export const convertLatLngToTuple = (latLng: LatLng): Tuple => {

    return [latLng.lat, latLng.lng];
};

export const convertTupleToLatLng = (tuple: Tuple): LatLng => {

    return {
        lat: tuple[0],
        lng: tuple[1],
    };
};

export const convertTupleToCoordinate = (tuple: Tuple): Coordinate => {

    return {
        latitude: tuple[0],
        longitude: tuple[1],
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

    return convertCoordinateToString(convertLatLngToCoordinate(latLng));
};

export const convertTupleToString = (tuple: Tuple): string => {

    return convertCoordinateToString(convertTupleToCoordinate(tuple));
};
