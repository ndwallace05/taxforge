import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-QInterview from './Interview';
import 1099-QForm from './Form';
import 1099-qReducer from '../../store/slices/1099-qSlice';

const store = configureStore({
  reducer: {
    1099-q: 1099-qReducer
  }
});

const meta: Meta<typeof 1099-QInterview> = {
  title: 'Forms/1099-Q',
  component: 1099-QInterview,
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
      <1099-QForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-QForm printMode={true} />
    </Provider>
  ),
};
