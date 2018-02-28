import { TodoState } from "../todo/store";

export interface RootState {}

export type AppState =  RootState &
                        TodoState;
