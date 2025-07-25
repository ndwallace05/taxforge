import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2553Interview from './Interview';
import 2553Form from './Form';
import 2553Reducer from '../../store/slices/2553Slice';

const store = configureStore({
  reducer: {
    2553: 2553Reducer
  }
});

const meta: Meta<typeof 2553Interview> = {
  title: 'Forms/2553',
  component: 2553Interview,
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
      <2553Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2553Form printMode={true} />
    </Provider>
  ),
};
