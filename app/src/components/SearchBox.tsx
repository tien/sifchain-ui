import clsx from "clsx";
import {
  computed,
  defineComponent,
  HTMLAttributes,
  InputHTMLAttributes,
  onMounted,
  onUnmounted,
  ref,
} from "vue";
import AssetIcon from "./AssetIcon";

export const SearchBox = defineComponent({
  props: {
    containerClass: {
      type: Object as HTMLAttributes["class"],
    },
    class: {
      type: Object as HTMLAttributes["class"],
    },
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    placeholder: {
      type: String,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    onInput: {
      type: Function,
      default: () => {},
    },
    containerProps: {
      type: Object, // HTMLAttributes
    },
    enableKeyBindings: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { containerClass, containerProps, enableKeyBindings, ...inputProps } =
      props;

    const inputRef = ref<HTMLInputElement>();

    const isMacOs = computed(
      () =>
        navigator?.platform?.includes("Mac") ||
        navigator.userAgent.includes("Mac"),
    );

    const isFocused = ref(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === "f" && (isMacOs.value ? e.metaKey : e.ctrlKey)) ||
        e.key === "/"
      ) {
        e.preventDefault();
        inputRef.value?.focus();
      }
    };

    onMounted(() => {
      if (enableKeyBindings) {
        document.addEventListener("keydown", handleKeyDown);
      }

      if (inputRef.value) {
        inputRef.value.addEventListener("focus", () => {
          isFocused.value = true;
        });
        inputRef.value.addEventListener("blur", () => {
          isFocused.value = false;
        });
      }
    });

    onUnmounted(() => {
      if (enableKeyBindings) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    });

    return () => (
      <div
        {...containerProps}
        class={[
          "bg-gray-input h-8 relative flex items-center rounded overflow-hidden focus-within:border-white border border-solid border-gray-input_outline",
          containerProps?.class,
          containerClass,
        ]}
      >
        <AssetIcon
          size={20}
          icon="interactive/search"
          class={clsx(`ml-3 w-4 h-4`, {
            "text-[#6E6E6E]": props.disabled,
          })}
        />
        <input
          ref={inputRef}
          type="search"
          id={props.id}
          {...(inputProps as Partial<InputHTMLAttributes>)}
          value={props.value}
          class={[
            "box-border w-full absolute top-0 bottom-0 left-0 right-0 pl-8 pr-3 h-full bg-transparent outline-none text-white font-sans font-medium text-md",
            props.class,
          ]}
        />

        {props.enableKeyBindings && isFocused.value && (
          <label
            for={props.id}
            class={clsx(
              "absolute right-2 items-center gap-[6px] flex transition-transform",
              {
                "translate-x-[-34px]": props.value?.length,
              },
            )}
          >
            {[`${isMacOs.value ? "Cmd" : "Ctrl"} F`, "/"].map((key) => (
              <div
                key={key}
                class="rounded px-2 py-[6px] text-sm font-mono bg-gray-base opacity-60 hover:opacity-80 transition-transform"
              >
                {key}
              </div>
            ))}
          </label>
        )}
      </div>
    );
  },
});
