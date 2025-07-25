import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 2120Interview from './Interview';
import 2120Form from './Form';
import 2120Reducer from '../../store/slices/2120Slice';

const store = configureStore({
  reducer: {
    2120: 2120Reducer
  }
});

const meta: Meta<typeof 2120Interview> = {
  title: 'Forms/2120',
  component: 2120Interview,
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
      <2120Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <2120Form printMode={true} />
    </Provider>
  ),
};
