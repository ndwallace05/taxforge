import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-EICInterview from './Interview';
import Schedule-EICForm from './Form';
import schedule-eicReducer from '../../store/slices/schedule-eicSlice';

const store = configureStore({
  reducer: {
    schedule-eic: schedule-eicReducer
  }
});

const meta: Meta<typeof Schedule-EICInterview> = {
  title: 'Forms/Schedule-EIC',
  component: Schedule-EICInterview,
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
      <Schedule-EICForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-EICForm printMode={true} />
    </Provider>
  ),
};
