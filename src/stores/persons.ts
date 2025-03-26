// src/stores/persons.ts
import { writable } from 'svelte/store';
import type { Person } from '../types/person';

export const persons = writable<Person[]>([]);

