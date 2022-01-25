import { AuthenticatedUserData } from '../reducers/AuthReducer';

export const LOADING_AUTH = 'LOADING_AUTH';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
export const LOGOUT = 'LOGOUT';
export const STOP_LOADING_AUTH = 'STOP_LOADING_AUTH';

export type AuthActionsType =
  | { type: typeof LOADING_AUTH }
  | { type: typeof STOP_LOADING_AUTH }
  | { type: typeof LOGOUT }
  | { type: typeof SET_UNAUTHENTICATED }
  | { type: typeof SET_AUTHENTICATED; payload: AuthenticatedUserData };
