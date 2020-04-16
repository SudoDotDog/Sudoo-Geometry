/**
 * @author WMXPY
 * @namespace Geometry
 * @description Calculate
 */

import { Coordinate } from "./declare";

export const calculateLinearDistance = (start: Coordinate, end: Coordinate): number => {

    const latitudeDifference: number = Math.abs(start.latitude - end.latitude);
    const longitudeDifference: number = Math.abs(start.longitude - end.longitude);

    const distance: number = Math.sqrt(Math.pow(latitudeDifference, 2) + Math.pow(longitudeDifference, 2));
    return distance;
};
