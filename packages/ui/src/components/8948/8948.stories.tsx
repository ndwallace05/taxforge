import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8948Interview from './Interview';
import 8948Form from './Form';
import 8948Reducer from '../../store/slices/8948Slice';

const store = configureStore({
  reducer: {
    8948: 8948Reducer
  }
});

const meta: Meta<typeof 8948Interview> = {
  title: 'Forms/8948',
  component: 8948Interview,
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
      <8948Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8948Form printMode={true} />
    </Provider>
  ),
};
