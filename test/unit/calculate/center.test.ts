/**
 * @author WMXPY
 * @namespace Geometry_Calculate
 * @description Center
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate, getLinearCenterByCoordinates, getLinearCenterByObjects, getWeightedCenterByCoordinates, getWeightedCenterByObjects } from "../../../src";
import { createMockObject, MockObject } from "../../mock/object";

describe('Given [Calculate-Center] helper functions', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('geometry-calculate-center');

    describe('Given [Linear-Center] related', (): void => {

        it('should be able to calculate weighted center by coordinates', (): void => {

            const coordinates: Coordinate[] = [
                createCoordinate(-1, -1),
                createCoordinate(0, 0),
                createCoordinate(3, 3),
            ];

            const center: Coordinate | null = getLinearCenterByCoordinates(coordinates);

            expect(center).to.be.deep.equal(createCoordinate(1, 1));
        });

        it('should be able to calculate weighted center by objects', (): void => {

            const objects: MockObject[] = [
                createMockObject(-1, -1),
                createMockObject(0, 0),
                createMockObject(3, 3),
            ];

            const center: Coordinate | null = getLinearCenterByObjects(objects, (each: MockObject) => each.value);

            expect(center).to.be.deep.equal(createCoordinate(1, 1));
        });
    });

    describe('Given [Weighted-Center] related', (): void => {

        it('should be able to calculate weighted center by coordinates', (): void => {

            const coordinates: Coordinate[] = [
                createCoordinate(-1, -1),
                createCoordinate(0, 0),
                createCoordinate(4, 4),
            ];

            const center: Coordinate | null = getWeightedCenterByCoordinates(coordinates);

            expect(center).to.be.deep.equal(createCoordinate(1, 1));
        });

        it('should be able to calculate weighted center by objects', (): void => {

            const objects: MockObject[] = [
                createMockObject(-1, -1),
                createMockObject(0, 0),
                createMockObject(4, 4),
            ];

            const center: Coordinate | null = getWeightedCenterByObjects(objects, (each: MockObject) => each.value);

            expect(center).to.be.deep.equal(createCoordinate(1, 1));
        });
    });
});
