/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Group
 */

import { calculateLinearDistance, calculateLinearDistanceWithCache } from "../calculate/distance";
import { Coordinate, GetCoordinateFunction } from "../declare";

export type GroupedCoordinates = {

    readonly center: Coordinate;
    readonly coordinates: Coordinate[];
};

export type GroupedObjects<T> = {

    readonly center: Coordinate;
    readonly objects: T[];
};

export const groupCoordinatesByLinearDistance = (coordinates: Coordinate[], range: number = 0.05): GroupedCoordinates[] => {

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

    const result: GroupedCoordinates[] = [];
    for (const key of groups.keys()) {

        result.push({
            center: key,
            coordinates: groups.get(key) as Coordinate[],
        });
    }
    return result;
};

export const groupObjectsByLinearDistance = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
    range: number = 0.05,
): Array<GroupedObjects<T>> => {

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

    const result: Array<GroupedObjects<T>> = [];
    for (const key of groups.keys()) {

        result.push({
            center: key,
            objects: groups.get(key) as T[],
        });
    }
    return result;
};
