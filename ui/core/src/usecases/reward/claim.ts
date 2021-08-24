// This is an attempt to follow Rudi's new usecase WIP pattern
import { DistributionType } from "../../generated/proto/sifnode/dispensation/v1/types";
import { Services } from "../../services";

type PickDispensation = Pick<Services["dispensation"], "claim">;
type PickSif = Pick<Services["sif"], "signAndBroadcast">;

export type ClaimArgs = {
  dispensation: PickDispensation;
  sif: PickSif;
};

export function Claim({ dispensation, sif }: ClaimArgs) {
  return async (params: {
    claimType: DistributionType;
    fromAddress: string;
  }) => {
    if (!params) throw "You forgot claimType and fromAddress";
    const tx = await dispensation.claim(params);
    return await sif.signAndBroadcast(tx.value.msg);
  };
}
