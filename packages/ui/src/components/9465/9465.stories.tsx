import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 9465Interview from './Interview';
import 9465Form from './Form';
import 9465Reducer from '../../store/slices/9465Slice';

const store = configureStore({
  reducer: {
    9465: 9465Reducer
  }
});

const meta: Meta<typeof 9465Interview> = {
  title: 'Forms/9465',
  component: 9465Interview,
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
      <9465Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <9465Form printMode={true} />
    </Provider>
  ),
};
