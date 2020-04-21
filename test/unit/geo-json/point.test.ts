/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Point
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { convertGeoJsonPointToCoordinate, Coordinate, createGeoJsonPoint, GeoJsonPoint } from "../../../src";

describe('Given [GeoJson-Point] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-geo-json-point');

    it('should be able to convert coordinate to point geometry', (): void => {

        const longitude: number = chance.integer();
        const latitude: number = chance.integer();

        const coordinate: Coordinate = {
            latitude,
            longitude,
        };

        const geometry: GeoJsonPoint = createGeoJsonPoint(coordinate);

        expect(geometry).to.be.deep.equal({
            type: "Point",
            coordinates: [longitude, latitude],
        });
    });

    it('should be able to convert point geometry to coordinate', (): void => {

        const longitude: number = chance.integer();
        const latitude: number = chance.integer();

        const geometry: GeoJsonPoint = {
            type: "Point",
            coordinates: [longitude, latitude],
        };

        const coordinate: Coordinate = convertGeoJsonPointToCoordinate(geometry);

        expect(coordinate).to.be.deep.equal({
            longitude,
            latitude,
        });
    });
});
