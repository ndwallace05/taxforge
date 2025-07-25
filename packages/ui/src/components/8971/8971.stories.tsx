import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8971Interview from './Interview';
import 8971Form from './Form';
import 8971Reducer from '../../store/slices/8971Slice';

const store = configureStore({
  reducer: {
    8971: 8971Reducer
  }
});

const meta: Meta<typeof 8971Interview> = {
  title: 'Forms/8971',
  component: 8971Interview,
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
      <8971Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8971Form printMode={true} />
    </Provider>
  ),
};
