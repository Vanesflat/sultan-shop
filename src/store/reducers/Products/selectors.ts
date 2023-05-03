import { createSelector } from '@reduxjs/toolkit';
import { Category, NameSpace, SortType, Status } from '../../../enums';
import { Product } from '../../../types/product';
import { RootState } from '../../../types/state';

export const getCurrentCategory = (state: RootState): Category | null => state[NameSpace.Products].category;
export const getCurrentSortType = (state: RootState): SortType => state[NameSpace.Products].sortType;
export const getProducts = (state: RootState): Product[] => state[NameSpace.Products].products;
export const getStatus = (state: RootState): Status => state[NameSpace.Products].status;

export const getFetchStatus = createSelector([getStatus], (status) => ({
  isLoading: [Status.Idle, Status.Loading].includes(status),
  isSuccess: status === Status.Success,
  isError: status === Status.Error
}));

