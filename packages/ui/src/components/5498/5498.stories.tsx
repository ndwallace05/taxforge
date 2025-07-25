import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5498Interview from './Interview';
import 5498Form from './Form';
import 5498Reducer from '../../store/slices/5498Slice';

const store = configureStore({
  reducer: {
    5498: 5498Reducer
  }
});

const meta: Meta<typeof 5498Interview> = {
  title: 'Forms/5498',
  component: 5498Interview,
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
      <5498Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5498Form printMode={true} />
    </Provider>
  ),
};
