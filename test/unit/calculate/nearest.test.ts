/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Distance
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate, getNearestCoordinateByLinearDistance } from "../../../src";

describe('Given [Calculate-Nearest] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-calculate-nearest');

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
