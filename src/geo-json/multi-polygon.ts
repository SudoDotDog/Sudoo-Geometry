/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Multi Polygon
 */

import { convertCoordinateToTuple, reverseTuple } from "../declare/convert";
import { Coordinate, MultiPolygonCoordinate, MultiPolygonTuple, Tuple } from "../declare/declare";
import { convertMultiPolygonTupleToMultiPolygonCoordinate } from "../declare/polygon";

export type GeoJsonMultiPolygon = {

    readonly type: "MultiPolygon";
    readonly coordinates: Tuple[][][];
};

export const createGeoJsonMultiPolygon = (coordinates: Coordinate[][][]): GeoJsonMultiPolygon => {

    return {
        type: 'MultiPolygon',
        coordinates: coordinates
            .map((polygon: Coordinate[][]) => polygon
                .map((each: Coordinate[]) => each
                    .map((coordinate: Coordinate) => convertCoordinateToTuple(coordinate)),
                ),
            ),
    };
};

export const convertGeoJsonMultiPolygonToMultiPolygonCoordinate = (multiPolygonGeoJson: GeoJsonMultiPolygon): MultiPolygonCoordinate => {

    return convertMultiPolygonTupleToMultiPolygonCoordinate(multiPolygonGeoJson.coordinates);
};

export const convertGeoJsonMultiPolygonToMultiPolygonTuple = (multiPolygonGeoJson: GeoJsonMultiPolygon): MultiPolygonTuple => {

    return multiPolygonGeoJson.coordinates;
};

export const reverseGeoJsonMultiPolygonTuples = (multiPolygonGeoJson: GeoJsonMultiPolygon): GeoJsonMultiPolygon => {

    const coordinates: Tuple[][][] = multiPolygonGeoJson.coordinates
        .map((first: Tuple[][]) => first
            .map((second: Tuple[]) => second
                .map((third: Tuple) => reverseTuple(third)),
            ),
        );

    return {
        type: 'MultiPolygon',
        coordinates,
    };
};
