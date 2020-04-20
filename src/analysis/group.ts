/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Group
 */

import { calculateLinearDistance } from "../calculate/distance";
import { convertCoordinateToString, Coordinate, GetCoordinateFunction } from "../declare";

export type GroupedCoordinates = {

    readonly key: string;
    readonly center: Coordinate;
    readonly coordinates: Coordinate[];
};

export type GroupedObjects<T> = {

    readonly key: string;
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
