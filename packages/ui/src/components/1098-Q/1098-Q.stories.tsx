import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098-QInterview from './Interview';
import 1098-QForm from './Form';
import 1098-qReducer from '../../store/slices/1098-qSlice';

const store = configureStore({
  reducer: {
    1098-q: 1098-qReducer
  }
});

const meta: Meta<typeof 1098-QInterview> = {
  title: 'Forms/1098-Q',
  component: 1098-QInterview,
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
      <1098-QForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098-QForm printMode={true} />
    </Provider>
  ),
};
