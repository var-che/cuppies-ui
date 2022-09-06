import { createAction, props } from "@ngrx/store";

export const addCommunity = createAction(
    '[Community Page] Add Community',
    props<{ name: string }>()
);

export const removeCommunity = createAction(
    '[Community Page] Remove Community',
    props<{ id: string }>()
);

export const loadCommunities = createAction('[Community page] Load Communities');

