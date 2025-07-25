import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-JInterview from './Interview';
import Schedule-JForm from './Form';
import schedule-jReducer from '../../store/slices/schedule-jSlice';

const store = configureStore({
  reducer: {
    schedule-j: schedule-jReducer
  }
});

const meta: Meta<typeof Schedule-JInterview> = {
  title: 'Forms/Schedule-J',
  component: Schedule-JInterview,
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
      <Schedule-JForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-JForm printMode={true} />
    </Provider>
  ),
};
