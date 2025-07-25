import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5713Interview from './Interview';
import 5713Form from './Form';
import 5713Reducer from '../../store/slices/5713Slice';

const store = configureStore({
  reducer: {
    5713: 5713Reducer
  }
});

const meta: Meta<typeof 5713Interview> = {
  title: 'Forms/5713',
  component: 5713Interview,
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
      <5713Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5713Form printMode={true} />
    </Provider>
  ),
};
