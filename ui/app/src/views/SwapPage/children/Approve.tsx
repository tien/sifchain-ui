import { Form } from "@/components/Form";
import Modal from "@/components/Modal";
import { TokenIcon } from "@/components/TokenIcon";
import { defineComponent } from "vue";
import { useSwapPageData } from "../useSwapPageData";

export const ApproveSwap = defineComponent({
  setup() {
    const data = useSwapPageData();
    return () => {
      return (
        <Modal
          heading="Waiting For Approval"
          icon="navigation/swap"
          onClose={data.requestTransactionModalClose}
        >
          <Form.Details
            details={[
              ["Swapping", null],
              [
                <div class="flex items-center">
                  {data.fromAsset.value && (
                    <TokenIcon asset={data.fromAsset} size={18}></TokenIcon>
                  )}
                  <span class="ml-[4px]">
                    {data.fromSymbol.value.toUpperCase()}
                  </span>
                </div>,
                data.fromAmount.value,
              ],
              [
                <div class="flex items-center">
                  {data.toAsset.value && (
                    <TokenIcon asset={data.toAsset} size={18}></TokenIcon>
                  )}
                  <span class="ml-[4px]">
                    {data.toAsset?.value?.displaySymbol?.toUpperCase()}
                  </span>
                </div>,
                data.toAmount.value,
              ],
            ]}
          ></Form.Details>
          <div class="text-center w-full font-medium">
            Confirm this transaction in your wallet.
          </div>
          {/* <Button.CallToAction
              class="mt-[10px]"
              onClick={() => data.handleAskConfirmClicked()}
            >
              Confirm
            </Button.CallToAction> */}
        </Modal>
      );
    };
  },
});
