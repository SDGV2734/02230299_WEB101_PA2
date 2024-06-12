// src/store/usePokemonStore.js

import { create } from 'zustand';

const usePokemonStore = create((set) => ({
  caughtPokemon: [],
  catchPokemon: (pokemon) =>
    set((state) => ({
      caughtPokemon: [...state.caughtPokemon, pokemon],
    })),
  releasePokemon: (name) =>
    set((state) => ({
      caughtPokemon: state.caughtPokemon.filter((p) => p.name !== name),
    })),
}));

export default usePokemonStore;
