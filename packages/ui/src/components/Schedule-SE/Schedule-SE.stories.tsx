import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Schedule-SEInterview from './Interview';
import Schedule-SEForm from './Form';
import schedule-seReducer from '../../store/slices/schedule-seSlice';

const store = configureStore({
  reducer: {
    schedule-se: schedule-seReducer
  }
});

const meta: Meta<typeof Schedule-SEInterview> = {
  title: 'Forms/Schedule-SE',
  component: Schedule-SEInterview,
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
      <Schedule-SEForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <Schedule-SEForm printMode={true} />
    </Provider>
  ),
};
