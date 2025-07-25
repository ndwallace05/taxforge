import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706-DInterview from './Interview';
import 706-DForm from './Form';
import 706-dReducer from '../../store/slices/706-dSlice';

const store = configureStore({
  reducer: {
    706-d: 706-dReducer
  }
});

const meta: Meta<typeof 706-DInterview> = {
  title: 'Forms/706-D',
  component: 706-DInterview,
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
      <706-DForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706-DForm printMode={true} />
    </Provider>
  ),
};
