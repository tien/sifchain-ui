<script lang="ts">
import { computed, defineComponent } from "vue";
import { useCore } from "@/hooks/useCore";
import SifButton from "@/componentsLegacy/SifButton/SifButton.vue";
import Icon from "@/componentsLegacy/Icon/Icon.vue";

export default defineComponent({
  name: "EtheriumWalletController",
  components: {
    SifButton,
    Icon,
  },
  setup() {
    const { store, usecases } = useCore();
    async function handleConnectClicked() {
      await usecases.wallet.eth.connectToEthWallet();
    }
    const address = computed(() => store.wallet.get(Network.ETHEREUM).address);
    const connected = computed(
      () => store.wallet.get(Network.ETHEREUM).isConnected,
    );
    return {
      address,
      connected,
      handleConnectClicked,
    };
  },
});
</script>

<template>
  <div class="wrapper">
    <div v-if="connected">
      <p class="mb-2" v-if="address">{{ address }} <Icon icon="tick" /></p>
      <SifButton connect disabled data-handle="metamask-connect-button">
        <img class="image" src="../../assets/metamask.png" />
        Metamask Connected
      </SifButton>
    </div>
    <SifButton
      connect
      v-else
      @click="handleConnectClicked"
      data-handle="metamask-connect-button"
      >Connect Metamask</SifButton
    >
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 23px;
  height: 100%;
  margin-top: 0px;
  margin-right: 12px;
}
</style>
