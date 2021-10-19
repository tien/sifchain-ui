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
 * @interface InlineResponseDefault1Details
 */
export interface InlineResponseDefault1Details {
  /**
   *
   * @type {string}
   * @memberof InlineResponseDefault1Details
   */
  typeUrl?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponseDefault1Details
   */
  value?: string;
}

export function InlineResponseDefault1DetailsFromJSON(
  json: any,
): InlineResponseDefault1Details {
  return InlineResponseDefault1DetailsFromJSONTyped(json, false);
}

export function InlineResponseDefault1DetailsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponseDefault1Details {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    typeUrl: !exists(json, "type_url") ? undefined : json["type_url"],
    value: !exists(json, "value") ? undefined : json["value"],
  };
}

export function InlineResponseDefault1DetailsToJSON(
  value?: InlineResponseDefault1Details | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type_url: value.typeUrl,
    value: value.value,
  };
}
