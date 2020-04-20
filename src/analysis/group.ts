/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Group
 */

import { calculateLinearDistance } from "../calculate/distance";
import { Coordinate } from "../declare";

export type CoordinateGroup = {
    readonly coordinates: Coordinate[];
};

export const groupCoordinates = (coordinates: Coordinate[], range: number = 0.05): CoordinateGroup[] => {

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

    const result: CoordinateGroup[] = [];
    for (const group of groups.values()) {

        result.push({
            coordinates: group,
        });
    }
    return result;
};
