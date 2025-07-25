import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8879-EOInterview from './Interview';
import 8879-EOForm from './Form';
import 8879-eoReducer from '../../store/slices/8879-eoSlice';

const store = configureStore({
  reducer: {
    8879-eo: 8879-eoReducer
  }
});

const meta: Meta<typeof 8879-EOInterview> = {
  title: 'Forms/8879-EO',
  component: 8879-EOInterview,
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
      <8879-EOForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8879-EOForm printMode={true} />
    </Provider>
  ),
};
