import { createModel } from '@rematch/core';

import { get } from '../../api/api';
import { apiUrls, replaceUrls } from '../../api/apiurl';
import ScheduleState from '../../interfaces/ScheduleState';

export default createModel()({
  state: {

  } as ScheduleState,

  reducers: {
    setSchedule(state, schedule) {
      return { ...state, schedule };
    },
  },

  effects: (dispatch) => ({

    async getSchedules(): Promise<void> {
      try {
        const response = await get(replaceUrls(apiUrls.schedule));

        if (response && response.status === 200) {
          dispatch.account.setSchedule(response.data.results);
        }
      } catch (error) {
        // TODO: Handle error
      }
    },
  }),
});
