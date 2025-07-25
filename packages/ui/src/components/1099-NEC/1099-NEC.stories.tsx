import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-NECInterview from './Interview';
import 1099-NECForm from './Form';
import 1099-necReducer from '../../store/slices/1099-necSlice';

const store = configureStore({
  reducer: {
    1099-nec: 1099-necReducer
  }
});

const meta: Meta<typeof 1099-NECInterview> = {
  title: 'Forms/1099-NEC',
  component: 1099-NECInterview,
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
      <1099-NECForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-NECForm printMode={true} />
    </Provider>
  ),
};
