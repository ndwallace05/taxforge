import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4797Interview from './Interview';
import 4797Form from './Form';
import 4797Reducer from '../../store/slices/4797Slice';

const store = configureStore({
  reducer: {
    4797: 4797Reducer
  }
});

const meta: Meta<typeof 4797Interview> = {
  title: 'Forms/4797',
  component: 4797Interview,
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
      <4797Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4797Form printMode={true} />
    </Provider>
  ),
};
