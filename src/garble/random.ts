/**
 * @author WMXPY
 * @namespace Geometry_Garble
 * @description Random
 */

import { Coordinate } from "../declare/declare";

export const randomGarbleLocation = (value: number, range: number): number => {

    const diffrence: number = Math.random() * range;
    return value;
};

export const randomGarbleCoordinate = (original: Coordinate): Coordinate => {

    return original;
};
