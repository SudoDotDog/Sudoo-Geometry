/**
 * @author WMXPY
 * @namespace Geometry_GeoJson
 * @description Declare
 */

import { Tuple } from "../declare/declare";

export type GeoJsonPoint = {

    readonly type: "Point";
    readonly coordinates: Tuple;
};
