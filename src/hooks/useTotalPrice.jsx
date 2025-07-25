import { useContext } from "react";
import {
  TotalPriceContext,
  TotalPriceDispatchContext,
} from "./../context/TotalPriceContext";

const useTotalPrice = () => useContext(TotalPriceContext);
const useTotalPriceDispatch = () => useContext(TotalPriceDispatchContext);

export { useTotalPrice, useTotalPriceDispatch };
