import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8919Interview from './Interview';
import 8919Form from './Form';
import 8919Reducer from '../../store/slices/8919Slice';

const store = configureStore({
  reducer: {
    8919: 8919Reducer
  }
});

const meta: Meta<typeof 8919Interview> = {
  title: 'Forms/8919',
  component: 8919Interview,
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
      <8919Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8919Form printMode={true} />
    </Provider>
  ),
};
