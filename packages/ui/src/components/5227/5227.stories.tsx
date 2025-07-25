import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5227Interview from './Interview';
import 5227Form from './Form';
import 5227Reducer from '../../store/slices/5227Slice';

const store = configureStore({
  reducer: {
    5227: 5227Reducer
  }
});

const meta: Meta<typeof 5227Interview> = {
  title: 'Forms/5227',
  component: 5227Interview,
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
      <5227Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5227Form printMode={true} />
    </Provider>
  ),
};
