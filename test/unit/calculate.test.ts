/**
 * @author WMXPY
 * @namespace Geometry
 * @description Calculate
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { calculateLinearDistance, Coordinate, createCoordinate, getNearestCoordinateByLinearDistance } from "../../src";

describe('Given [Calculate] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-calculate');

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

    it('should be able to calculate nearest coordinate', (): void => {

        const from: Coordinate = createCoordinate(0, 0);

        const destinations: Coordinate[] = [
            createCoordinate(-3, 4),
            createCoordinate(4, 5),
        ];
        const target: Coordinate | null = getNearestCoordinateByLinearDistance(from, destinations);

        expect(target).to.be.deep.equal(createCoordinate(-3, 4));
    });
});
