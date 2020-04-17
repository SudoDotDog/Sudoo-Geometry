/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Radius
 */

import { Coordinate } from "../declare";

const ANGLE: number = 180;
const EARTH_RADIUS: number = 6378.137;

export const calculateRadiusRange = (distance: number): number => {

    return (distance * Math.PI) / ANGLE;
};

export const calculateRadiusDistance = (from: Coordinate, to: Coordinate): number => {

    const radiusFromLatitude: number = calculateRadiusRange(from.latitude);
    const radiusFromLongitude: number = calculateRadiusRange(from.longitude);

    const radiusToLatitude: number = calculateRadiusRange(to.latitude);
    const radiusToLongitude: number = calculateRadiusRange(to.longitude);

    const radiusLatitudeDifference: number = radiusFromLatitude - radiusToLatitude;
    const radiusLongitudeDifference: number = radiusFromLongitude - radiusToLongitude;

    const radiusCombinedDifference: number = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(radiusLatitudeDifference / 2), 2) +
        Math.cos(radiusFromLatitude) * Math.cos(radiusToLatitude) * Math.pow(Math.sin(radiusLongitudeDifference / 2), 2)));

    const curvedDistance: number = radiusCombinedDifference * EARTH_RADIUS;
    return curvedDistance;
};
