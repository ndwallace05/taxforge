import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8965Interview from './Interview';
import 8965Form from './Form';
import 8965Reducer from '../../store/slices/8965Slice';

const store = configureStore({
  reducer: {
    8965: 8965Reducer
  }
});

const meta: Meta<typeof 8965Interview> = {
  title: 'Forms/8965',
  component: 8965Interview,
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
      <8965Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8965Form printMode={true} />
    </Provider>
  ),
};
