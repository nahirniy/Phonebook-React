import { STATUS } from 'services/function-thunk';

export const initialState = {
  contacts: {
    items: [],
    status: STATUS.IDLE,
    error: null,
  },
  filter: '',
};
