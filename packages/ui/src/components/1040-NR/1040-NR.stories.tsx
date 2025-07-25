import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1040-NRInterview from './Interview';
import 1040-NRForm from './Form';
import 1040-nrReducer from '../../store/slices/1040-nrSlice';

const store = configureStore({
  reducer: {
    1040-nr: 1040-nrReducer
  }
});

const meta: Meta<typeof 1040-NRInterview> = {
  title: 'Forms/1040-NR',
  component: 1040-NRInterview,
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
      <1040-NRForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1040-NRForm printMode={true} />
    </Provider>
  ),
};
