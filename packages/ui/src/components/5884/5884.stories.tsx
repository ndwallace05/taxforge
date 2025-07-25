import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5884Interview from './Interview';
import 5884Form from './Form';
import 5884Reducer from '../../store/slices/5884Slice';

const store = configureStore({
  reducer: {
    5884: 5884Reducer
  }
});

const meta: Meta<typeof 5884Interview> = {
  title: 'Forms/5884',
  component: 5884Interview,
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
      <5884Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5884Form printMode={true} />
    </Provider>
  ),
};
