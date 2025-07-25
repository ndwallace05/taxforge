import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5472Interview from './Interview';
import 5472Form from './Form';
import 5472Reducer from '../../store/slices/5472Slice';

const store = configureStore({
  reducer: {
    5472: 5472Reducer
  }
});

const meta: Meta<typeof 5472Interview> = {
  title: 'Forms/5472',
  component: 5472Interview,
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
      <5472Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5472Form printMode={true} />
    </Provider>
  ),
};
