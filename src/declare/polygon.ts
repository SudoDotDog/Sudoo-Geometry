/**
 * @author WMXPY
 * @namespace Geometry_Declare
 * @description Polygon
 */

import { convertCoordinateToLatLng, convertCoordinateToTuple, convertTupleToCoordinate } from "./convert";
import { Coordinate, MultiPolygonCoordinate, MultiPolygonTuple, PolygonCoordinate, PolygonLatLng, PolygonTuple, Tuple } from "./declare";

export const convertPolygonCoordinateToPolygonLatLng = (polygon: PolygonCoordinate): PolygonLatLng => {

    const result: PolygonLatLng = polygon
        .map((first: Coordinate[]) => first
            .map((second: Coordinate) => convertCoordinateToLatLng(second)),
        );

    return result;
};

export const convertPolygonCoordinateToPolygonTuple = (polygon: PolygonCoordinate): PolygonTuple => {

    const result: PolygonTuple = polygon
        .map((first: Coordinate[]) => first
            .map((second: Coordinate) => convertCoordinateToTuple(second)),
        );

    return result;
};

export const convertPolygonTupleToPolygonCoordinate = (polygon: PolygonTuple): PolygonCoordinate => {

    const result: PolygonCoordinate = polygon
        .map((first: Tuple[]) => first
            .map((second: Tuple) => convertTupleToCoordinate(second)),
        );

    return result;
};

export const convertMultiPolygonTupleToMultiPolygonCoordinate = (multiPolygon: MultiPolygonTuple): MultiPolygonCoordinate => {

    const result: MultiPolygonCoordinate = multiPolygon
        .map((first: Tuple[][]) => first
            .map((second: Tuple[]) => second
                .map((third: Tuple) => convertTupleToCoordinate(third)),
            ),
        );

    return result;
};
