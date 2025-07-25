import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 990-PFInterview from './Interview';
import 990-PFForm from './Form';
import 990-pfReducer from '../../store/slices/990-pfSlice';

const store = configureStore({
  reducer: {
    990-pf: 990-pfReducer
  }
});

const meta: Meta<typeof 990-PFInterview> = {
  title: 'Forms/990-PF',
  component: 990-PFInterview,
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
      <990-PFForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <990-PFForm printMode={true} />
    </Provider>
  ),
};
