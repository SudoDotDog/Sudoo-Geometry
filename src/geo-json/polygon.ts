/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Polygon
 */

import { convertCoordinateToTuple, reverseTuple } from "../declare/convert";
import { Coordinate, PolygonCoordinate, PolygonTuple, Tuple } from "../declare/declare";
import { convertPolygonTupleToPolygonCoordinate } from "../declare/polygon";

export type GeoJsonPolygon = {

    readonly type: "Polygon";
    readonly coordinates: PolygonTuple;
};

export const createGeoJsonPolygon = (coordinates: PolygonCoordinate): GeoJsonPolygon => {

    return {
        type: 'Polygon',
        coordinates: coordinates
            .map((polygon: Coordinate[]) => polygon
                .map((each: Coordinate) => convertCoordinateToTuple(each)),
            ),
    };
};

export const convertGeoJsonPolygonToPolygonCoordinate = (polygonGeoJson: GeoJsonPolygon): PolygonCoordinate => {

    return convertPolygonTupleToPolygonCoordinate(polygonGeoJson.coordinates);
};

export const convertGeoJsonPolygonToPolygonTuple = (polygonGeoJson: GeoJsonPolygon): PolygonTuple => {

    return polygonGeoJson.coordinates;
};

export const reverseGeoJsonPolygonTuples = (polygonGeoJson: GeoJsonPolygon): GeoJsonPolygon => {

    const coordinates: PolygonTuple = polygonGeoJson.coordinates
        .map((first: Tuple[]) => first
            .map((second: Tuple) => reverseTuple(second)),
        );

    return {
        type: 'Polygon',
        coordinates,
    };
};
