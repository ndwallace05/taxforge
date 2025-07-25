import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5330Interview from './Interview';
import 5330Form from './Form';
import 5330Reducer from '../../store/slices/5330Slice';

const store = configureStore({
  reducer: {
    5330: 5330Reducer
  }
});

const meta: Meta<typeof 5330Interview> = {
  title: 'Forms/5330',
  component: 5330Interview,
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
      <5330Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5330Form printMode={true} />
    </Provider>
  ),
};
