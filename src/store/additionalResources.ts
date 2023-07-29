import { basicStore } from '@/store/basicStore';
import { create } from 'zustand';

export const useFilmsStore = create(basicStore<'films'>('films'));
export const useHomeworldsStore = create(basicStore<'planets'>('planets'));
export const useSpeciesStore = create(basicStore<'species'>('species'));
export const useStarshipsStore = create(basicStore<'starships'>('starships'));
export const useVehicleStore = create(basicStore<'vehicles'>('vehicles'));
