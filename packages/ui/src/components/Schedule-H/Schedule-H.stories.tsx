import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-HInterview from './Interview';
import Schedule-HForm from './Form';
import schedule-hReducer from '../../store/slices/schedule-hSlice';

const store = configureStore({
  reducer: {
    schedule-h: schedule-hReducer
  }
});

const meta: Meta<typeof Schedule-HInterview> = {
  title: 'Forms/Schedule-H',
  component: Schedule-HInterview,
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
      <Schedule-HForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-HForm printMode={true} />
    </Provider>
  ),
};
