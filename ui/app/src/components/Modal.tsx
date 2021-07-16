import {
  defineComponent,
  PropType,
  SetupContext,
  Teleport,
  HTMLAttributes,
  onMounted,
  onUnmounted,
} from "vue";
import AssetIcon, { IconName } from "@/componentsLegacy/utilities/AssetIcon";
import { ProgressPlugin } from "webpack";

export type ModalProps = {
  teleportTo?: string;
  onClose: () => void;
  showClose?: boolean;
  class?: HTMLAttributes["class"];
  heading?: string;
  icon?: IconName;
  escapeToClose?: boolean;
  headingAction?: any;
};

export default defineComponent({
  props: {
    teleportTo: {
      type: String as PropType<ModalProps["teleportTo"]>,
      default: () => "#app",
    },
    onClose: {
      type: Function as PropType<ModalProps["onClose"]>,
      required: true,
    },
    showClose: {
      type: Boolean as PropType<ModalProps["showClose"]>,
    },
    class: {
      type: [String, Object, Array] as PropType<ModalProps["class"]>,
    },
    heading: {
      type: String as PropType<ModalProps["heading"]>,
    },
    headingAction: {
      type: [String, Object, Number, Array, Boolean] as PropType<
        ModalProps["headingAction"]
      >,
      required: false,
    },
    icon: {
      type: String as PropType<ModalProps["icon"]>,
    },
    escapeToClose: {
      type: Boolean as PropType<ModalProps["escapeToClose"]>,
      default: () => true,
    },
  },
  name: "Modal",
  setup(props, context: SetupContext) {
    const onKeypress = (ev: KeyboardEvent) => {
      if (ev.key === "Escape" && props.onClose && props.escapeToClose) {
        props.onClose();
      }
    };
    onMounted(() => {
      document.body.addEventListener("keydown", onKeypress);
    });
    onUnmounted(() => {
      document.body.removeEventListener("keydown", onKeypress);
    });
    return () => (
      <Teleport to={props.teleportTo}>
        <div class="overflow-hidden fixed bg-white bg-opacity-30 z-20 inset-0 left-sidebar animate-fade-in duration-300" />
        <div
          class="absolute inset-0 left-sidebar flex items-center justify-center z-20 animate-fade-in duration-500"
          onClick={() => props.onClose?.()}
        >
          <div
            class={`justify-start flex-col items-center bg-black relative w-[530px] rounded-[10px] text-white p-4 ${
              props.class || ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {!!props.heading && (
              <div class="w-full flex-row flex justify-between items-center pb-4">
                <div class="flex items-center">
                  {props.icon ? (
                    <AssetIcon icon={props.icon} active size={32} />
                  ) : null}
                  <span class="text-accent-base font-sans text-[26px] ml-[10px] font-semibold">
                    {props.heading}
                  </span>
                </div>
                <div>{props.headingAction}</div>

                <div class="flex items-center">
                  {props.showClose && (
                    <button onClick={() => props.onClose?.()}>
                      <AssetIcon icon="interactive/close" size={24} />
                    </button>
                  )}
                </div>
              </div>
            )}
            <div class="w-full">{context.slots.default?.()}</div>
          </div>
        </div>
      </Teleport>
    );
  },
});
