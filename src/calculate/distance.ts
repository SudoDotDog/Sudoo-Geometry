/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Distance
 */

import { Coordinate } from "../declare/declare";

export const calculateLinearDistance = (start: Coordinate, end: Coordinate): number => {

    const latitudeDifference: number = Math.abs(start.latitude - end.latitude);
    const longitudeDifference: number = Math.abs(start.longitude - end.longitude);

    const distance: number = Math.sqrt(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2));
    return distance;
};

export const calculateLinearDistanceWithCache = (cache: Map<string, number>, start: Coordinate, end: Coordinate): number => {

    const parsed: string = `${end.latitude}:${end.longitude}`;

    if (cache.has(parsed)) {
        return cache.get(parsed) as number;
    }

    const latitudeDifference: number = Math.abs(start.latitude - end.latitude);
    const longitudeDifference: number = Math.abs(start.longitude - end.longitude);

    const distance: number = Math.sqrt(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2));

    cache.set(parsed, distance);
    return distance;
};
