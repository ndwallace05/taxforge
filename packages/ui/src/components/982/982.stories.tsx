import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 982Interview from './Interview';
import 982Form from './Form';
import 982Reducer from '../../store/slices/982Slice';

const store = configureStore({
  reducer: {
    982: 982Reducer
  }
});

const meta: Meta<typeof 982Interview> = {
  title: 'Forms/982',
  component: 982Interview,
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
      <982Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <982Form printMode={true} />
    </Provider>
  ),
};
