import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098Interview from './Interview';
import 1098Form from './Form';
import 1098Reducer from '../../store/slices/1098Slice';

const store = configureStore({
  reducer: {
    1098: 1098Reducer
  }
});

const meta: Meta<typeof 1098Interview> = {
  title: 'Forms/1098',
  component: 1098Interview,
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
      <1098Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098Form printMode={true} />
    </Provider>
  ),
};
