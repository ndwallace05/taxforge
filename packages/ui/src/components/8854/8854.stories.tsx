import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8854Interview from './Interview';
import 8854Form from './Form';
import 8854Reducer from '../../store/slices/8854Slice';

const store = configureStore({
  reducer: {
    8854: 8854Reducer
  }
});

const meta: Meta<typeof 8854Interview> = {
  title: 'Forms/8854',
  component: 8854Interview,
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
      <8854Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8854Form printMode={true} />
    </Provider>
  ),
};
