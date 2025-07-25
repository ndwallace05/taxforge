import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 15109Interview from './Interview';
import 15109Form from './Form';
import 15109Reducer from '../../store/slices/15109Slice';

const store = configureStore({
  reducer: {
    15109: 15109Reducer
  }
});

const meta: Meta<typeof 15109Interview> = {
  title: 'Forms/15109',
  component: 15109Interview,
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
      <15109Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <15109Form printMode={true} />
    </Provider>
  ),
};
