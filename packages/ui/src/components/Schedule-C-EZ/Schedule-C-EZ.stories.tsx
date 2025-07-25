import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-C-EZInterview from './Interview';
import Schedule-C-EZForm from './Form';
import schedule-c-ezReducer from '../../store/slices/schedule-c-ezSlice';

const store = configureStore({
  reducer: {
    schedule-c-ez: schedule-c-ezReducer
  }
});

const meta: Meta<typeof Schedule-C-EZInterview> = {
  title: 'Forms/Schedule-C-EZ',
  component: Schedule-C-EZInterview,
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
      <Schedule-C-EZForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-C-EZForm printMode={true} />
    </Provider>
  ),
};
