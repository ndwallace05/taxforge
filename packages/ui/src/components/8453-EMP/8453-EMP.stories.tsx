import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8453-EMPInterview from './Interview';
import 8453-EMPForm from './Form';
import 8453-empReducer from '../../store/slices/8453-empSlice';

const store = configureStore({
  reducer: {
    8453-emp: 8453-empReducer
  }
});

const meta: Meta<typeof 8453-EMPInterview> = {
  title: 'Forms/8453-EMP',
  component: 8453-EMPInterview,
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
      <8453-EMPForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8453-EMPForm printMode={true} />
    </Provider>
  ),
};
