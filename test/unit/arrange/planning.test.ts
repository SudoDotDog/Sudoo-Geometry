/**
 * @author WMXPY
 * @namespace Geometry_Arrange
 * @description Planning
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { arrangePlannedCoordinateByLinearDistance, arrangePlannedObjectByLinearDistance, Coordinate, createCoordinate, ObjectPlanningResult, PlanningResult } from "../../../src";
import { createMockObject, MockObject } from "../../mock/object";

describe('Given [Arrange-Planning] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-arrange-planning');

    it('should be able to arrange planned coordinate by distance', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: Coordinate[] = [
            createCoordinate(-3, -3), // 0
            createCoordinate(4, 4), // 1
            createCoordinate(2, 2), // 2
        ];

        const result: PlanningResult[] = arrangePlannedCoordinateByLinearDistance(start, destinations);
        expect(result).to.be.deep.equal([
            {
                coordinate: destinations[2],
                distance: 314827.09,
            },
            {
                coordinate: destinations[1],
                distance: 314635.33,
            },
            {
                coordinate: destinations[0],
                distance: 1101642.76,
            },
        ]);
    });

    it('should be able to arrange planned object by distance', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: MockObject[] = [
            createMockObject(-3, -3), // 0
            createMockObject(4, 4), // 1
            createMockObject(2, 2), // 2
        ];

        const result: Array<ObjectPlanningResult<MockObject>> = arrangePlannedObjectByLinearDistance(start, destinations, (each: MockObject) => each.value);
        expect(result).to.be.deep.equal([
            {
                object: destinations[2],
                distance: 314827.09,
            },
            {
                object: destinations[1],
                distance: 314635.33,
            },
            {
                object: destinations[0],
                distance: 1101642.76,
            },
        ]);
    });
});
