import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 6251Interview from './Interview';
import 6251Form from './Form';
import 6251Reducer from '../../store/slices/6251Slice';

const store = configureStore({
  reducer: {
    6251: 6251Reducer
  }
});

const meta: Meta<typeof 6251Interview> = {
  title: 'Forms/6251',
  component: 6251Interview,
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
      <6251Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <6251Form printMode={true} />
    </Provider>
  ),
};
