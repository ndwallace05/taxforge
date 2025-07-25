import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-DInterview from './Interview';
import Schedule-DForm from './Form';
import schedule-dReducer from '../../store/slices/schedule-dSlice';

const store = configureStore({
  reducer: {
    schedule-d: schedule-dReducer
  }
});

const meta: Meta<typeof Schedule-DInterview> = {
  title: 'Forms/Schedule-D',
  component: Schedule-DInterview,
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
      <Schedule-DForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-DForm printMode={true} />
    </Provider>
  ),
};
