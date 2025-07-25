import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 990-BLInterview from './Interview';
import 990-BLForm from './Form';
import 990-blReducer from '../../store/slices/990-blSlice';

const store = configureStore({
  reducer: {
    990-bl: 990-blReducer
  }
});

const meta: Meta<typeof 990-BLInterview> = {
  title: 'Forms/990-BL',
  component: 990-BLInterview,
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
      <990-BLForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <990-BLForm printMode={true} />
    </Provider>
  ),
};
