import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 990-EZInterview from './Interview';
import 990-EZForm from './Form';
import 990-ezReducer from '../../store/slices/990-ezSlice';

const store = configureStore({
  reducer: {
    990-ez: 990-ezReducer
  }
});

const meta: Meta<typeof 990-EZInterview> = {
  title: 'Forms/990-EZ',
  component: 990-EZInterview,
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
      <990-EZForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <990-EZForm printMode={true} />
    </Provider>
  ),
};
