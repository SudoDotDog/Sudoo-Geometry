/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Combine
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { CombinedCoordinates, CombinedObjects, combineExactlyCoordinates, combineExactlyObjects, Coordinate, createCoordinate } from "../../../src";
import { createMockObject, MockObject } from "../../mock/object";

describe('Given [Analysis-Combine] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('geometry-analysis-combine');

    it('should be able to combine coordinates', (): void => {

        const coordinates: Coordinate[] = [
            createCoordinate(1, 1),
            createCoordinate(0, 1),
            createCoordinate(1, 1),
            createCoordinate(2, 2),
            createCoordinate(1, 1),
        ];

        const result: CombinedCoordinates[] = combineExactlyCoordinates(coordinates);
        expect(result).to.be.lengthOf(3);
    });

    it('should be able to combine objects', (): void => {

        const objects: MockObject[] = [
            createMockObject(1, 1),
            createMockObject(0, 1),
            createMockObject(1, 1),
            createMockObject(2, 2),
            createMockObject(1, 1),
        ];

        const result: Array<CombinedObjects<MockObject>> = combineExactlyObjects(objects, (each: MockObject) => each.value);
        expect(result).to.be.lengthOf(3);
    });
});
