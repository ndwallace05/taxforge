import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098-EInterview from './Interview';
import 1098-EForm from './Form';
import 1098-eReducer from '../../store/slices/1098-eSlice';

const store = configureStore({
  reducer: {
    1098-e: 1098-eReducer
  }
});

const meta: Meta<typeof 1098-EInterview> = {
  title: 'Forms/1098-E',
  component: 1098-EInterview,
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
      <1098-EForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098-EForm printMode={true} />
    </Provider>
  ),
};
