import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-PATRInterview from './Interview';
import 1099-PATRForm from './Form';
import 1099-patrReducer from '../../store/slices/1099-patrSlice';

const store = configureStore({
  reducer: {
    1099-patr: 1099-patrReducer
  }
});

const meta: Meta<typeof 1099-PATRInterview> = {
  title: 'Forms/1099-PATR',
  component: 1099-PATRInterview,
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
      <1099-PATRForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-PATRForm printMode={true} />
    </Provider>
  ),
};
