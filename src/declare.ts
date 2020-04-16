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

export type Coordinate = {

    readonly latitude: number;
    readonly longitude: number;
};

export type GetCoordinateFunction<T extends any> = (object: T) => Coordinate;
