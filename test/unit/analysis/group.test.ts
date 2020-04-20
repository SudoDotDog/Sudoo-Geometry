/**
 * @author WMXPY
 * @namespace Geometry_Analysis
 * @description Group
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coordinate, createCoordinate } from "../../../src";
import { CoordinateGroup, groupCoordinates } from "../../../src/analysis/group";

describe('Given [Analysis-Group] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('geometry-analysis-group');

    it('should be able to group coordinates', (): void => {

        const coordinates: Coordinate[] = [
            createCoordinate(1, 1),
            createCoordinate(0, 1),
            createCoordinate(1, 0),
            createCoordinate(2, 2),
            createCoordinate(1, 4),
        ];

        const result: CoordinateGroup[] = groupCoordinates(coordinates, 1);
        expect(result).to.be.lengthOf(3);
    });
});
