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
  InlineResponse20046Counterparty,
  InlineResponse20046CounterpartyFromJSON,
  InlineResponse20046CounterpartyFromJSONTyped,
  InlineResponse20046CounterpartyToJSON,
  InlineResponse20046Versions,
  InlineResponse20046VersionsFromJSON,
  InlineResponse20046VersionsFromJSONTyped,
  InlineResponse20046VersionsToJSON,
} from "./";

/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 * @export
 * @interface InlineResponse20046Connections
 */
export interface InlineResponse20046Connections {
  /**
   * connection identifier.
   * @type {string}
   * @memberof InlineResponse20046Connections
   */
  id?: string;
  /**
   * client associated with this connection.
   * @type {string}
   * @memberof InlineResponse20046Connections
   */
  clientId?: string;
  /**
   *
   * @type {Array<InlineResponse20046Versions>}
   * @memberof InlineResponse20046Connections
   */
  versions?: Array<InlineResponse20046Versions>;
  /**
   * current state of the connection end.
   * @type {string}
   * @memberof InlineResponse20046Connections
   */
  state?: InlineResponse20046ConnectionsStateEnum;
  /**
   *
   * @type {InlineResponse20046Counterparty}
   * @memberof InlineResponse20046Connections
   */
  counterparty?: InlineResponse20046Counterparty;
  /**
   * delay period associated with this connection.
   * @type {string}
   * @memberof InlineResponse20046Connections
   */
  delayPeriod?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20046ConnectionsStateEnum {
  UninitializedUnspecified = "STATE_UNINITIALIZED_UNSPECIFIED",
  Init = "STATE_INIT",
  Tryopen = "STATE_TRYOPEN",
  Open = "STATE_OPEN",
}

export function InlineResponse20046ConnectionsFromJSON(
  json: any,
): InlineResponse20046Connections {
  return InlineResponse20046ConnectionsFromJSONTyped(json, false);
}

export function InlineResponse20046ConnectionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse20046Connections {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    clientId: !exists(json, "client_id") ? undefined : json["client_id"],
    versions: !exists(json, "versions")
      ? undefined
      : (json["versions"] as Array<any>).map(
          InlineResponse20046VersionsFromJSON,
        ),
    state: !exists(json, "state") ? undefined : json["state"],
    counterparty: !exists(json, "counterparty")
      ? undefined
      : InlineResponse20046CounterpartyFromJSON(json["counterparty"]),
    delayPeriod: !exists(json, "delay_period")
      ? undefined
      : json["delay_period"],
  };
}

export function InlineResponse20046ConnectionsToJSON(
  value?: InlineResponse20046Connections | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    client_id: value.clientId,
    versions:
      value.versions === undefined
        ? undefined
        : (value.versions as Array<any>).map(InlineResponse20046VersionsToJSON),
    state: value.state,
    counterparty: InlineResponse20046CounterpartyToJSON(value.counterparty),
    delay_period: value.delayPeriod,
  };
}
