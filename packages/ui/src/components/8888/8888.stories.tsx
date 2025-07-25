import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8888Interview from './Interview';
import 8888Form from './Form';
import 8888Reducer from '../../store/slices/8888Slice';

const store = configureStore({
  reducer: {
    8888: 8888Reducer
  }
});

const meta: Meta<typeof 8888Interview> = {
  title: 'Forms/8888',
  component: 8888Interview,
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
      <8888Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8888Form printMode={true} />
    </Provider>
  ),
};
