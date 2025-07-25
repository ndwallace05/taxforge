import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8453-SInterview from './Interview';
import 8453-SForm from './Form';
import 8453-sReducer from '../../store/slices/8453-sSlice';

const store = configureStore({
  reducer: {
    8453-s: 8453-sReducer
  }
});

const meta: Meta<typeof 8453-SInterview> = {
  title: 'Forms/8453-S',
  component: 8453-SInterview,
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
      <8453-SForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8453-SForm printMode={true} />
    </Provider>
  ),
};
