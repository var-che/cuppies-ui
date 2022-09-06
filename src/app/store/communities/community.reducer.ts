import { createReducer, on } from "@ngrx/store";
import { Community } from "src/app/dashboard/community/community.model";
import { addCommunity, loadCommunities, removeCommunity } from "./community.actions";

export interface CommunityState {
    communities: Community[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: CommunityState = {
    communities: [],
    error: null,
    status: 'pending',
}

export const communityReducer = createReducer(
    initialState,
    on(addCommunity, (state, { name }) => ({
        ...state,
        communities: [...state.communities, {id: Date.now().toString(), name: name}]
    })),
    on(removeCommunity, (state, { id }) => ({
        ...state,
        communities: state.communities.filter((community) => community.id !== id)
    })),
    on(loadCommunities, (state) => ({...state, status: 'loading'}))
)