/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Multi Polygon
 */

import { convertCoordinateToTuple, reverseTuple } from "../declare/convert";
import { Coordinate, MultiPolygonCoordinate, MultiPolygonTuple, PolygonCoordinate, PolygonTuple, Tuple } from "../declare/declare";
import { convertMultiPolygonTupleToMultiPolygonCoordinate } from "../declare/polygon";

export type GeoJsonMultiPolygon = {

    readonly type: "MultiPolygon";
    readonly coordinates: MultiPolygonTuple;
};

export const createGeoJsonMultiPolygon = (coordinates: MultiPolygonCoordinate): GeoJsonMultiPolygon => {

    return {
        type: 'MultiPolygon',
        coordinates: coordinates
            .map((polygon: PolygonCoordinate) => polygon
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

    const coordinates: MultiPolygonTuple = multiPolygonGeoJson.coordinates
        .map((first: PolygonTuple) => first
            .map((second: Tuple[]) => second
                .map((third: Tuple) => reverseTuple(third)),
            ),
        );

    return {
        type: 'MultiPolygon',
        coordinates,
    };
};
