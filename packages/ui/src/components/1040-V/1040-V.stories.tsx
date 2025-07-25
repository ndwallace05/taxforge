import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1040-VInterview from './Interview';
import 1040-VForm from './Form';
import 1040-vReducer from '../../store/slices/1040-vSlice';

const store = configureStore({
  reducer: {
    1040-v: 1040-vReducer
  }
});

const meta: Meta<typeof 1040-VInterview> = {
  title: 'Forms/1040-V',
  component: 1040-VInterview,
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
      <1040-VForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1040-VForm printMode={true} />
    </Provider>
  ),
};
