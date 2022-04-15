import { init, RematchRootState, Models } from '@rematch/core';

import schedules from '../models/schedules/schedules';


export interface RootModel extends Models<RootModel> {
  schedules: typeof schedules,
}

const models = {
  schedules,
};

const store = init({
  models,
});

export type RootState = RematchRootState<RootModel>;

export default store;
