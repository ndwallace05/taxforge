import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8865Interview from './Interview';
import 8865Form from './Form';
import 8865Reducer from '../../store/slices/8865Slice';

const store = configureStore({
  reducer: {
    8865: 8865Reducer
  }
});

const meta: Meta<typeof 8865Interview> = {
  title: 'Forms/8865',
  component: 8865Interview,
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
      <8865Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8865Form printMode={true} />
    </Provider>
  ),
};
