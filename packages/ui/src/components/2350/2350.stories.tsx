import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2350Interview from './Interview';
import 2350Form from './Form';
import 2350Reducer from '../../store/slices/2350Slice';

const store = configureStore({
  reducer: {
    2350: 2350Reducer
  }
});

const meta: Meta<typeof 2350Interview> = {
  title: 'Forms/2350',
  component: 2350Interview,
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
      <2350Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2350Form printMode={true} />
    </Provider>
  ),
};
