/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Group
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate, groupCoordinatesByLinearDistance, GroupedCoordinates, GroupedObjects, groupObjectsByLinearDistance } from "../../../src";
import { createMockObject, MockObject } from "../../mock/object";

describe('Given [Analysis-Group] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('geometry-analysis-group');

    it('should be able to group coordinates', (): void => {

        const coordinates: Coordinate[] = [
            createCoordinate(1, 1),
            createCoordinate(0, 1),
            createCoordinate(1, 0),
            createCoordinate(2, 2),
            createCoordinate(1, 4),
        ];

        const result: GroupedCoordinates[] = groupCoordinatesByLinearDistance(coordinates, 1);
        expect(result).to.be.lengthOf(3);
    });

    it('should be able to group objects', (): void => {

        const objects: MockObject[] = [
            createMockObject(1, 1),
            createMockObject(0, 1),
            createMockObject(1, 0),
            createMockObject(2, 2),
            createMockObject(1, 4),
        ];

        const result: Array<GroupedObjects<MockObject>> = groupObjectsByLinearDistance(objects, (each: MockObject) => each.value, 1);
        expect(result).to.be.lengthOf(3);
    });
});
