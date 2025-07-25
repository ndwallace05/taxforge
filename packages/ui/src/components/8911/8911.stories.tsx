import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8911Interview from './Interview';
import 8911Form from './Form';
import 8911Reducer from '../../store/slices/8911Slice';

const store = configureStore({
  reducer: {
    8911: 8911Reducer
  }
});

const meta: Meta<typeof 8911Interview> = {
  title: 'Forms/8911',
  component: 8911Interview,
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
      <8911Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8911Form printMode={true} />
    </Provider>
  ),
};
