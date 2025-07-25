import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-EInterview from './Interview';
import Schedule-EForm from './Form';
import schedule-eReducer from '../../store/slices/schedule-eSlice';

const store = configureStore({
  reducer: {
    schedule-e: schedule-eReducer
  }
});

const meta: Meta<typeof Schedule-EInterview> = {
  title: 'Forms/Schedule-E',
  component: Schedule-EInterview,
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
      <Schedule-EForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-EForm printMode={true} />
    </Provider>
  ),
};
