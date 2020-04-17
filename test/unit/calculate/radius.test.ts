/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Radius
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate } from "../../../src";
import { calculateRadiusDistance, calculateRadiusDistanceInMeter } from "../../../src/calculate/radius";

describe('Given [Calculate-Radius] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-calculate-radius');

    it('should be able to calculate radius distance', (): void => {

        const from: Coordinate = createCoordinate(1, 1);
        const to: Coordinate = createCoordinate(4, 5);

        const distance: number = calculateRadiusDistance(from, to);

        // tslint:disable-next-line: no-magic-numbers
        expect(distance).to.be.equal(556.217);
    });

    it('should be able to calculate radius distance - negative', (): void => {

        // tslint:disable-next-line: no-magic-numbers
        const from: Coordinate = createCoordinate(40, -73);
        // tslint:disable-next-line: no-magic-numbers
        const to: Coordinate = createCoordinate(58, 3);

        const distance: number = calculateRadiusDistance(from, to);

        // tslint:disable-next-line: no-magic-numbers
        expect(distance).to.be.equal(5561.532);
    });

    it('should be able to calculate radius distance in meter', (): void => {

        const from: Coordinate = createCoordinate(1, 1);
        const to: Coordinate = createCoordinate(4, 5);

        const distance: number = calculateRadiusDistanceInMeter(from, to);

        // tslint:disable-next-line: no-magic-numbers
        expect(distance).to.be.equal(556217.45);
    });
});
