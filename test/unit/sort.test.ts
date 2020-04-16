/**
 * @author WMXPY
 * @namespace Geometry
 * @description Sort
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate, sortCoordinateByLinearDistance } from "../../src";

describe('Given [Sort] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-sort');

    it('should be able to sort by linear distance', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: Coordinate[] = [
            createCoordinate(1, 1),
            createCoordinate(5, 3),
            createCoordinate(0, 0),
            createCoordinate(2, 1),
            createCoordinate(0, -1),
        ];

        const result: Coordinate[] = sortCoordinateByLinearDistance(start, destinations);

        expect(result).to.be.deep.equal([
            destinations[2],
            destinations[4],
            destinations[0],
            destinations[3],
            destinations[1],
        ]);
    });

    it('sort should not mutate original', (): void => {

        const start: Coordinate = createCoordinate(0, 0);
        const destinations: Coordinate[] = [
            createCoordinate(1, 1),
            createCoordinate(5, 3),
            createCoordinate(0, 0),
            createCoordinate(2, 1),
            createCoordinate(0, -1),
        ];

        sortCoordinateByLinearDistance(start, destinations);
        expect(destinations).to.be.deep.equal(destinations);
    });
});
