import { AppDispatch, State } from '../types/state';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
