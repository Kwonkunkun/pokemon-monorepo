import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { Pokemon } from 'libs/shared-types/src';

/* eslint-disable-next-line */
export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemon = useCallback(async () => {}, []);
};
