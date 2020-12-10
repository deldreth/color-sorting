import {
  defineCustomElements,
  applyPolyfills,
} from "@water-sorting/components/loader";
export * from "./components";

applyPolyfills().then(() => defineCustomElements());
