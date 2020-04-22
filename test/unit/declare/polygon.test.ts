/**
 * @author WMXPY
 * @namespace Geometry_Declare
 * @description Polygon
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { convertPolygonCoordinateToPolygonTuple, createTuple, PolygonCoordinate, PolygonTuple } from "../../../src";

describe('Given [Declare-Polygon] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-declare-polygon');

    it('should be able to convert polygon coordinate to polygon tuple', (): void => {

        const latitude: number = chance.natural();
        const longitude: number = chance.natural();

        const coordinates: PolygonCoordinate = [
            [{
                latitude,
                longitude,
            }],
        ];

        const result: PolygonTuple = convertPolygonCoordinateToPolygonTuple(coordinates);

        expect(result).to.be.deep.equal([[createTuple(latitude, longitude)]]);
    });
});
