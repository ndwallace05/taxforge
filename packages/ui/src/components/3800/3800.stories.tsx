import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 3800Interview from './Interview';
import 3800Form from './Form';
import 3800Reducer from '../../store/slices/3800Slice';

const store = configureStore({
  reducer: {
    3800: 3800Reducer
  }
});

const meta: Meta<typeof 3800Interview> = {
  title: 'Forms/3800',
  component: 3800Interview,
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
      <3800Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <3800Form printMode={true} />
    </Provider>
  ),
};
