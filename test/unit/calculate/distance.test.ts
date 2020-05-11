/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Distance
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { calculateLinearDistance, Coordinate, createCoordinate } from "../../../src";

describe('Given [Calculate-Distance] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-calculate-distance');

    it('should be able to calculate linear distance', (): void => {

        const from: Coordinate = createCoordinate(1, 1);
        const to: Coordinate = createCoordinate(4, 5);

        const distance: number = calculateLinearDistance(from, to);

        expect(distance).to.be.equal(5);
    });

    it('should be able to calculate linear distance - negative', (): void => {

        const from: Coordinate = createCoordinate(0, 0);
        const to: Coordinate = createCoordinate(-3, 4);

        const distance: number = calculateLinearDistance(from, to);

        expect(distance).to.be.equal(5);
    });

    it('should be able to calculate linear distance - double negative', (): void => {

        const from: Coordinate = createCoordinate(-1, -1);
        const to: Coordinate = createCoordinate(2, 3);

        const distance: number = calculateLinearDistance(from, to);

        expect(distance).to.be.equal(5);
    });
});
