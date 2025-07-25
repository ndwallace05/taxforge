import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 990Interview from './Interview';
import 990Form from './Form';
import 990Reducer from '../../store/slices/990Slice';

const store = configureStore({
  reducer: {
    990: 990Reducer
  }
});

const meta: Meta<typeof 990Interview> = {
  title: 'Forms/990',
  component: 990Interview,
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
      <990Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <990Form printMode={true} />
    </Provider>
  ),
};
