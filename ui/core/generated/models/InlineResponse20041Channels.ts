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
  CounterpartyChannelEnd,
  CounterpartyChannelEndFromJSON,
  CounterpartyChannelEndFromJSONTyped,
  CounterpartyChannelEndToJSON,
} from "./";

/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 * @export
 * @interface InlineResponse20041Channels
 */
export interface InlineResponse20041Channels {
  /**
   * State defines if a channel is in one of the following states:
   * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
   *
   *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
   *  - STATE_INIT: A channel has just started the opening handshake.
   *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
   *  - STATE_OPEN: A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
   * packets.
   * @type {string}
   * @memberof InlineResponse20041Channels
   */
  state?: InlineResponse20041ChannelsStateEnum;
  /**
   * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
   *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
   * @type {string}
   * @memberof InlineResponse20041Channels
   */
  ordering?: InlineResponse20041ChannelsOrderingEnum;
  /**
   *
   * @type {CounterpartyChannelEnd}
   * @memberof InlineResponse20041Channels
   */
  counterparty?: CounterpartyChannelEnd;
  /**
   *
   * @type {Array<string>}
   * @memberof InlineResponse20041Channels
   */
  connectionHops?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20041Channels
   */
  version?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20041Channels
   */
  portId?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20041Channels
   */
  channelId?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20041ChannelsStateEnum {
  UninitializedUnspecified = "STATE_UNINITIALIZED_UNSPECIFIED",
  Init = "STATE_INIT",
  Tryopen = "STATE_TRYOPEN",
  Open = "STATE_OPEN",
  Closed = "STATE_CLOSED",
}
/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20041ChannelsOrderingEnum {
  NoneUnspecified = "ORDER_NONE_UNSPECIFIED",
  Unordered = "ORDER_UNORDERED",
  Ordered = "ORDER_ORDERED",
}

export function InlineResponse20041ChannelsFromJSON(
  json: any,
): InlineResponse20041Channels {
  return InlineResponse20041ChannelsFromJSONTyped(json, false);
}

export function InlineResponse20041ChannelsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse20041Channels {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    state: !exists(json, "state") ? undefined : json["state"],
    ordering: !exists(json, "ordering") ? undefined : json["ordering"],
    counterparty: !exists(json, "counterparty")
      ? undefined
      : CounterpartyChannelEndFromJSON(json["counterparty"]),
    connectionHops: !exists(json, "connection_hops")
      ? undefined
      : json["connection_hops"],
    version: !exists(json, "version") ? undefined : json["version"],
    portId: !exists(json, "port_id") ? undefined : json["port_id"],
    channelId: !exists(json, "channel_id") ? undefined : json["channel_id"],
  };
}

export function InlineResponse20041ChannelsToJSON(
  value?: InlineResponse20041Channels | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    state: value.state,
    ordering: value.ordering,
    counterparty: CounterpartyChannelEndToJSON(value.counterparty),
    connection_hops: value.connectionHops,
    version: value.version,
    port_id: value.portId,
    channel_id: value.channelId,
  };
}
