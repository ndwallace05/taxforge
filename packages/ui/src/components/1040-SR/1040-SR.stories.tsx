import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1040-SRInterview from './Interview';
import 1040-SRForm from './Form';
import 1040-srReducer from '../../store/slices/1040-srSlice';

const store = configureStore({
  reducer: {
    1040-sr: 1040-srReducer
  }
});

const meta: Meta<typeof 1040-SRInterview> = {
  title: 'Forms/1040-SR',
  component: 1040-SRInterview,
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
      <1040-SRForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1040-SRForm printMode={true} />
    </Provider>
  ),
};
