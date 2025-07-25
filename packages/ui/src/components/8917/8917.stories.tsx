import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8917Interview from './Interview';
import 8917Form from './Form';
import 8917Reducer from '../../store/slices/8917Slice';

const store = configureStore({
  reducer: {
    8917: 8917Reducer
  }
});

const meta: Meta<typeof 8917Interview> = {
  title: 'Forms/8917',
  component: 8917Interview,
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
      <8917Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8917Form printMode={true} />
    </Provider>
  ),
};
