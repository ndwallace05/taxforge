import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-4VInterview from './Interview';
import W-4VForm from './Form';
import w-4vReducer from '../../store/slices/w-4vSlice';

const store = configureStore({
  reducer: {
    w-4v: w-4vReducer
  }
});

const meta: Meta<typeof W-4VInterview> = {
  title: 'Forms/W-4V',
  component: W-4VInterview,
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
      <W-4VForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-4VForm printMode={true} />
    </Provider>
  ),
};
