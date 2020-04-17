/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Radius
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate } from "../../../src";
import { calculateRadiusDistance } from "../../../src/calculate/radius";

describe('Given [Calculate-Radius] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-calculate-radius');

    it('should be able to calculate radius distance', (): void => {

        const from: Coordinate = createCoordinate(1, 1);
        const to: Coordinate = createCoordinate(4, 5);

        const distance: number = calculateRadiusDistance(from, to);

        expect(distance).to.be.equal(5);
    });
});
