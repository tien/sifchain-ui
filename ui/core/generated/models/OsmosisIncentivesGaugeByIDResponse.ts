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
  OsmosisIncentivesActiveGaugesResponseData,
  OsmosisIncentivesActiveGaugesResponseDataFromJSON,
  OsmosisIncentivesActiveGaugesResponseDataFromJSONTyped,
  OsmosisIncentivesActiveGaugesResponseDataToJSON,
} from "./";

/**
 *
 * @export
 * @interface OsmosisIncentivesGaugeByIDResponse
 */
export interface OsmosisIncentivesGaugeByIDResponse {
  /**
   *
   * @type {OsmosisIncentivesActiveGaugesResponseData}
   * @memberof OsmosisIncentivesGaugeByIDResponse
   */
  gauge?: OsmosisIncentivesActiveGaugesResponseData;
}

export function OsmosisIncentivesGaugeByIDResponseFromJSON(
  json: any,
): OsmosisIncentivesGaugeByIDResponse {
  return OsmosisIncentivesGaugeByIDResponseFromJSONTyped(json, false);
}

export function OsmosisIncentivesGaugeByIDResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OsmosisIncentivesGaugeByIDResponse {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    gauge: !exists(json, "gauge")
      ? undefined
      : OsmosisIncentivesActiveGaugesResponseDataFromJSON(json["gauge"]),
  };
}

export function OsmosisIncentivesGaugeByIDResponseToJSON(
  value?: OsmosisIncentivesGaugeByIDResponse | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    gauge: OsmosisIncentivesActiveGaugesResponseDataToJSON(value.gauge),
  };
}
