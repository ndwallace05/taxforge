import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-BInterview from './Interview';
import Schedule-BForm from './Form';
import schedule-bReducer from '../../store/slices/schedule-bSlice';

const store = configureStore({
  reducer: {
    schedule-b: schedule-bReducer
  }
});

const meta: Meta<typeof Schedule-BInterview> = {
  title: 'Forms/Schedule-B',
  component: Schedule-BInterview,
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
      <Schedule-BForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-BForm printMode={true} />
    </Provider>
  ),
};
