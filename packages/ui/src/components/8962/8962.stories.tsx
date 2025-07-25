import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8962Interview from './Interview';
import 8962Form from './Form';
import 8962Reducer from '../../store/slices/8962Slice';

const store = configureStore({
  reducer: {
    8962: 8962Reducer
  }
});

const meta: Meta<typeof 8962Interview> = {
  title: 'Forms/8962',
  component: 8962Interview,
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
      <8962Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8962Form printMode={true} />
    </Provider>
  ),
};
