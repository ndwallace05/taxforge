import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-LTCInterview from './Interview';
import 1099-LTCForm from './Form';
import 1099-ltcReducer from '../../store/slices/1099-ltcSlice';

const store = configureStore({
  reducer: {
    1099-ltc: 1099-ltcReducer
  }
});

const meta: Meta<typeof 1099-LTCInterview> = {
  title: 'Forms/1099-LTC',
  component: 1099-LTCInterview,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interview: Story = {
  args: {},
};

export const FormView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-LTCForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-LTCForm printMode={true} />
    </Provider>
  ),
};
