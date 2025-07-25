import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8864Interview from './Interview';
import 8864Form from './Form';
import 8864Reducer from '../../store/slices/8864Slice';

const store = configureStore({
  reducer: {
    8864: 8864Reducer
  }
});

const meta: Meta<typeof 8864Interview> = {
  title: 'Forms/8864',
  component: 8864Interview,
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
      <8864Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8864Form printMode={true} />
    </Provider>
  ),
};
