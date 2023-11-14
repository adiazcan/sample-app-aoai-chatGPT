import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./slices/rootReducer";
import type { AppDispatch } from "./index";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
