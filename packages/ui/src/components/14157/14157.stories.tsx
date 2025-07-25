import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 14157Interview from './Interview';
import 14157Form from './Form';
import 14157Reducer from '../../store/slices/14157Slice';

const store = configureStore({
  reducer: {
    14157: 14157Reducer
  }
});

const meta: Meta<typeof 14157Interview> = {
  title: 'Forms/14157',
  component: 14157Interview,
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
      <14157Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <14157Form printMode={true} />
    </Provider>
  ),
};
