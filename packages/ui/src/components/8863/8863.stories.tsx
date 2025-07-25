import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8863Interview from './Interview';
import 8863Form from './Form';
import 8863Reducer from '../../store/slices/8863Slice';

const store = configureStore({
  reducer: {
    8863: 8863Reducer
  }
});

const meta: Meta<typeof 8863Interview> = {
  title: 'Forms/8863',
  component: 8863Interview,
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
      <8863Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8863Form printMode={true} />
    </Provider>
  ),
};
