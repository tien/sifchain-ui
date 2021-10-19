/* tslint:disable */
/* eslint-disable */
/**
 * Sifchain - gRPC Gateway docs
 * A REST interface for state queries, legacy transactions
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
  InlineResponse20034Pool,
  InlineResponse20034PoolFromJSON,
  InlineResponse20034PoolFromJSONTyped,
  InlineResponse20034PoolToJSON,
} from "./";

/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 * @export
 * @interface InlineResponse20034
 */
export interface InlineResponse20034 {
  /**
   *
   * @type {InlineResponse20034Pool}
   * @memberof InlineResponse20034
   */
  pool?: InlineResponse20034Pool;
}

export function InlineResponse20034FromJSON(json: any): InlineResponse20034 {
  return InlineResponse20034FromJSONTyped(json, false);
}

export function InlineResponse20034FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse20034 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pool: !exists(json, "pool")
      ? undefined
      : InlineResponse20034PoolFromJSON(json["pool"]),
  };
}

export function InlineResponse20034ToJSON(
  value?: InlineResponse20034 | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pool: InlineResponse20034PoolToJSON(value.pool),
  };
}
