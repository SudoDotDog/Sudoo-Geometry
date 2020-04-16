/**
 * @author WMXPY
 * @namespace Geometry
 * @description Object
 * @override Mock
 */

import { Coordinate, createCoordinate } from "../../src";

export type MockObject = {
    readonly value: Coordinate;
};

export const createMockObject = (latitude: number, longitude: number): MockObject => {

    const coordinate: Coordinate = createCoordinate(latitude, longitude);
    return {
        value: coordinate,
    };
};
