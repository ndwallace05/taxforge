import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-SInterview from './Interview';
import 1099-SForm from './Form';
import 1099-sReducer from '../../store/slices/1099-sSlice';

const store = configureStore({
  reducer: {
    1099-s: 1099-sReducer
  }
});

const meta: Meta<typeof 1099-SInterview> = {
  title: 'Forms/1099-S',
  component: 1099-SInterview,
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
      <1099-SForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-SForm printMode={true} />
    </Provider>
  ),
};
