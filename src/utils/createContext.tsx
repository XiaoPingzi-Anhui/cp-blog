import * as React from "react";
import { createContext as _createContext } from "react-activation";
import { Draft } from "immer";
import useImmer from "./useImmer";

export default function createContext<T>(defaultValue: T) {
  type UpdateType = (f: (draft: Draft<T>) => void | T) => void;

  const defaultUpdate: UpdateType = () => {};

  const ctx = _createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function Provider(props: React.PropsWithChildren<{}>) {
    const [state, update] = useImmer(defaultValue);
    return <ctx.Provider value={{ state, update }} {...props} />;
  }

  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }

  return [useCtx, Provider] as const;
}
