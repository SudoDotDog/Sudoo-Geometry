/**
 * @author WMXPY
 * @namespace Geometry
 * @description Sort
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { calculateLinearDistance, Coordinate, createCoordinate } from "../../src";

describe('Given [Sort] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-sort');

    it('should be able to calculate linear distance', (): void => {

        const from: Coordinate = createCoordinate(1, 1);
        const to: Coordinate = createCoordinate(4, 5);

        const distance: number = calculateLinearDistance(from, to);

        expect(distance).to.be.equal(5);
    });
});
