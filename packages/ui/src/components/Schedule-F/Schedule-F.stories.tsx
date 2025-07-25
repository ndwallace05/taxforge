import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-FInterview from './Interview';
import Schedule-FForm from './Form';
import schedule-fReducer from '../../store/slices/schedule-fSlice';

const store = configureStore({
  reducer: {
    schedule-f: schedule-fReducer
  }
});

const meta: Meta<typeof Schedule-FInterview> = {
  title: 'Forms/Schedule-F',
  component: Schedule-FInterview,
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
      <Schedule-FForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-FForm printMode={true} />
    </Provider>
  ),
};
