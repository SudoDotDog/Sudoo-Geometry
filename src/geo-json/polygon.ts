/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Polygon
 */

import { convertCoordinateToTuple, convertTupleToCoordinate } from "../declare/convert";
import { Coordinate, Tuple } from "../declare/declare";

export type GeoJsonPolygon = {

    readonly type: "Polygon";
    readonly coordinates: Tuple[][];
};

export const createGeoJsonPolygon = (coordinates: Coordinate[][]): GeoJsonPolygon => {

    return {
        type: 'Polygon',
        coordinates: coordinates
            .map((polygon: Coordinate[]) => polygon
                .map((each: Coordinate) => convertCoordinateToTuple(each)),
            ),
    };
};

export const convertGeoJsonPolygonToPolygons = (polygonGeoJson: GeoJsonPolygon): Coordinate[][] => {

    return polygonGeoJson.coordinates
        .map((polygon: Tuple[]) => polygon
            .map((each: Tuple) => convertTupleToCoordinate(each)),
        );
};
