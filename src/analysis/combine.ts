/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Combine
 */

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

    const combined: Map<string, CombinedCoordinates> = new Map();

    outer: for (const object of objects) {

        const coordinate: Coordinate = getCoordinateFunction(object);
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
