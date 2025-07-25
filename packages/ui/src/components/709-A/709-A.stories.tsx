import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 709-AInterview from './Interview';
import 709-AForm from './Form';
import 709-aReducer from '../../store/slices/709-aSlice';

const store = configureStore({
  reducer: {
    709-a: 709-aReducer
  }
});

const meta: Meta<typeof 709-AInterview> = {
  title: 'Forms/709-A',
  component: 709-AInterview,
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
      <709-AForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <709-AForm printMode={true} />
    </Provider>
  ),
};
