import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8858Interview from './Interview';
import 8858Form from './Form';
import 8858Reducer from '../../store/slices/8858Slice';

const store = configureStore({
  reducer: {
    8858: 8858Reducer
  }
});

const meta: Meta<typeof 8858Interview> = {
  title: 'Forms/8858',
  component: 8858Interview,
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
      <8858Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8858Form printMode={true} />
    </Provider>
  ),
};
