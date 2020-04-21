/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Combine
 */

import { calculateLinearDistance } from "../calculate/distance";
import { convertCoordinateToString } from "../declare/convert";
import { Coordinate, GetCoordinateFunction } from "../declare/declare";

export type CombinedCoordinates = {

    readonly key: string;
    readonly center: Coordinate;
    readonly coordinates: Coordinate[];
};

export type CombinedObjects<T> = {

    readonly key: string;
    readonly center: Coordinate;
    readonly objects: T[];
};

export const combineCoordinatesByLinearDistance = (coordinates: Coordinate[], range: number = 0.05): CombinedCoordinates[] => {

    const groups: Map<Coordinate, Coordinate[]> = new Map();

    outer: for (const coordinate of coordinates) {

        for (const origin of groups.keys()) {

            const distance: number = calculateLinearDistance(coordinate, origin);
            if (distance <= range) {

                (groups.get(origin) as Coordinate[]).push(coordinate);
                continue outer;
            }
        }
        groups.set(coordinate, [coordinate]);
    }

    const result: CombinedCoordinates[] = [];
    for (const center of groups.keys()) {

        const key: string = convertCoordinateToString(center);
        result.push({
            key,
            center,
            coordinates: groups.get(center) as Coordinate[],
        });
    }
    return result;
};

export const combineObjectsByLinearDistance = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
    range: number = 0.05,
): Array<CombinedObjects<T>> => {

    const groups: Map<Coordinate, T[]> = new Map();

    outer: for (const object of objects) {

        const coordinate: Coordinate = getCoordinateFunction(object);
        for (const origin of groups.keys()) {

            const distance: number = calculateLinearDistance(coordinate, origin);
            if (distance <= range) {

                (groups.get(origin) as T[]).push(object);
                continue outer;
            }
        }
        groups.set(coordinate, [object]);
    }

    const result: Array<CombinedObjects<T>> = [];
    for (const center of groups.keys()) {

        const key: string = convertCoordinateToString(center);
        result.push({
            key,
            center,
            objects: groups.get(center) as T[],
        });
    }
    return result;
};
