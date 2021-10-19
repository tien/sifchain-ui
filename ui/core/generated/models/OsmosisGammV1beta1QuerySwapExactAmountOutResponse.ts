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
/**
 *
 * @export
 * @interface OsmosisGammV1beta1QuerySwapExactAmountOutResponse
 */
export interface OsmosisGammV1beta1QuerySwapExactAmountOutResponse {
  /**
   *
   * @type {string}
   * @memberof OsmosisGammV1beta1QuerySwapExactAmountOutResponse
   */
  tokenInAmount?: string;
}

export function OsmosisGammV1beta1QuerySwapExactAmountOutResponseFromJSON(
  json: any,
): OsmosisGammV1beta1QuerySwapExactAmountOutResponse {
  return OsmosisGammV1beta1QuerySwapExactAmountOutResponseFromJSONTyped(
    json,
    false,
  );
}

export function OsmosisGammV1beta1QuerySwapExactAmountOutResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsmosisGammV1beta1QuerySwapExactAmountOutResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tokenInAmount: !exists(json, "tokenInAmount")
      ? undefined
      : json["tokenInAmount"],
  };
}

export function OsmosisGammV1beta1QuerySwapExactAmountOutResponseToJSON(
  value?: OsmosisGammV1beta1QuerySwapExactAmountOutResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tokenInAmount: value.tokenInAmount,
  };
}
