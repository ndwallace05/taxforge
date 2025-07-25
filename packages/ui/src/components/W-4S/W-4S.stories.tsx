import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-4SInterview from './Interview';
import W-4SForm from './Form';
import w-4sReducer from '../../store/slices/w-4sSlice';

const store = configureStore({
  reducer: {
    w-4s: w-4sReducer
  }
});

const meta: Meta<typeof W-4SInterview> = {
  title: 'Forms/W-4S',
  component: W-4SInterview,
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
      <W-4SForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-4SForm printMode={true} />
    </Provider>
  ),
};
