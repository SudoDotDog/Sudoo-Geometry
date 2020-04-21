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
    readonly count: number;
    readonly center: Coordinate;
};

export const combineCoordinatesByLinearDistance = (coordinates: Coordinate[]): CombinedCoordinates[] => {

    const combined: Map<string, CombinedCoordinates> = new Map();

    outer: for (const coordinate of coordinates) {

        const key: string = convertCoordinateToString(coordinate);
        if (combined.has(key)) {

            const value: CombinedCoordinates = combined.get(key) as CombinedCoordinates;
            combined.set(key, {
                ...value,
                count: value.count + 1,
            });
            continue outer;
        }

        combined.set(key, {
            key,
            count: 1,
            center: coordinate,
        });
    }

    return [...combined.values()];
};

export const combineObjectsByLinearDistance = <T extends any>(
    objects: T[],
    getCoordinateFunction: GetCoordinateFunction<T>,
): CombinedCoordinates[] => {

    const groups: Map<Coordinate, number> = new Map();

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

    const result: CombinedCoordinates[] = [];
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
