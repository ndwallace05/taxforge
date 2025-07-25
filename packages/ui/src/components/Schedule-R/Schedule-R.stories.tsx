import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-RInterview from './Interview';
import Schedule-RForm from './Form';
import schedule-rReducer from '../../store/slices/schedule-rSlice';

const store = configureStore({
  reducer: {
    schedule-r: schedule-rReducer
  }
});

const meta: Meta<typeof Schedule-RInterview> = {
  title: 'Forms/Schedule-R',
  component: Schedule-RInterview,
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
      <Schedule-RForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-RForm printMode={true} />
    </Provider>
  ),
};
