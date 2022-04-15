import { createModel } from '@rematch/core';

import { get } from '../../api/api';
import { apiUrls, replaceUrls } from '../../api/apiurl';
import ScheduleState from '../../interfaces/ScheduleState';

export default createModel()({
  state: {
    list: [],
  } as ScheduleState,

  reducers: {
    setSchedule(state, schedule) {
      return { ...state, list: schedule };
    },
  },

  effects: (dispatch) => ({
    async getSchedules(): Promise<void> {
      try {
        const response = await get(replaceUrls(apiUrls.schedule));
        if (response && response.status === 200) {
          dispatch.schedules.setSchedule(response.data);
        }
      } catch (error) {
        // TODO: Handle error
      }
    },
  }),
});
