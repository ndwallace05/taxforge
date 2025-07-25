import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-AInterview from './Interview';
import Schedule-AForm from './Form';
import schedule-aReducer from '../../store/slices/schedule-aSlice';

const store = configureStore({
  reducer: {
    schedule-a: schedule-aReducer
  }
});

const meta: Meta<typeof Schedule-AInterview> = {
  title: 'Forms/Schedule-A',
  component: Schedule-AInterview,
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
      <Schedule-AForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-AForm printMode={true} />
    </Provider>
  ),
};
