import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8903Interview from './Interview';
import 8903Form from './Form';
import 8903Reducer from '../../store/slices/8903Slice';

const store = configureStore({
  reducer: {
    8903: 8903Reducer
  }
});

const meta: Meta<typeof 8903Interview> = {
  title: 'Forms/8903',
  component: 8903Interview,
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
      <8903Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8903Form printMode={true} />
    </Provider>
  ),
};
