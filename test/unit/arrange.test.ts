/**
 * @author WMXPY
 * @namespace Geometry
 * @description Arrange
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { arrangeCoordinateByLinearDistance, Coordinate, createCoordinate } from "../../src";

describe('Given [Arrange] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-arrange');

    it('should be able to arrange coordinate by distance', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: Coordinate[] = [
            createCoordinate(-2, -2), // 0
            createCoordinate(3, 4), // 1
            createCoordinate(2, 3), // 2
            createCoordinate(4, 5), // 3
            createCoordinate(8, 8), // 4
            createCoordinate(1, 2), // 5
        ];

        const result: Coordinate[] = arrangeCoordinateByLinearDistance(start, destinations);
        expect(result).to.be.deep.equal([
            destinations[5],
            destinations[2],
            destinations[1],
            destinations[3],
            destinations[4],
            destinations[0],
        ]);
    });

    it('arrange coordinate by distance should not mutate original', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: Coordinate[] = [
            createCoordinate(-2, -2), // 0
            createCoordinate(3, 4), // 1
            createCoordinate(2, 3), // 2
            createCoordinate(4, 5), // 3
            createCoordinate(8, 8), // 4
            createCoordinate(1, 2), // 5
        ];

        arrangeCoordinateByLinearDistance(start, destinations);
        expect(destinations).to.be.deep.equal(destinations);
    });
});
