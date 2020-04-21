/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Convert
 */

import { Coordinate } from "../declare/declare";
import { GeoJsonPoint } from "./declare";

export const convertGeoJsonPointToCoordinate = (point: GeoJsonPoint): Coordinate => {

    const longitude: number = point.coordinates[0];
    const latitude: number = point.coordinates[1];

    return {
        latitude,
        longitude,
    };
};
