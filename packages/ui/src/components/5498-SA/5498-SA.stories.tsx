import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5498-SAInterview from './Interview';
import 5498-SAForm from './Form';
import 5498-saReducer from '../../store/slices/5498-saSlice';

const store = configureStore({
  reducer: {
    5498-sa: 5498-saReducer
  }
});

const meta: Meta<typeof 5498-SAInterview> = {
  title: 'Forms/5498-SA',
  component: 5498-SAInterview,
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
      <5498-SAForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5498-SAForm printMode={true} />
    </Provider>
  ),
};
