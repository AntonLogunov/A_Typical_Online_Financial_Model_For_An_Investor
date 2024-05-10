import { createEvent, createStore } from "effector";
export const $store = createStore(0);
export const setStore = createEvent();
$store.on(setStore, (currentStore, newStore) => newStore);