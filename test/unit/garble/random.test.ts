/**
 * @author WMXPY
 * @namespace Geometry_Garble
 * @description Random
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate, randomGarbleCoordinate } from "../../../src";

describe('Given [Garble-Random] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-garble-random');

    it('should be able to garble coordinate', (): void => {

        const latitude: number = chance.natural();
        const longitude: number = chance.natural();

        const range: number = chance.natural();

        const coordinate: Coordinate = createCoordinate(latitude, longitude);
        const result: Coordinate = randomGarbleCoordinate(coordinate, range);

        const latitudeDifference: number = Math.abs(result.latitude - coordinate.latitude);
        const longitudeDifference: number = Math.abs(result.longitude - coordinate.longitude);

        expect(latitudeDifference).to.be.below(range);
        expect(longitudeDifference).to.be.below(range);
    });
});
