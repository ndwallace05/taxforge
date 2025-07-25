import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-KInterview from './Interview';
import 1099-KForm from './Form';
import 1099-kReducer from '../../store/slices/1099-kSlice';

const store = configureStore({
  reducer: {
    1099-k: 1099-kReducer
  }
});

const meta: Meta<typeof 1099-KInterview> = {
  title: 'Forms/1099-K',
  component: 1099-KInterview,
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
      <1099-KForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-KForm printMode={true} />
    </Provider>
  ),
};
