import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 4868Interview from './Interview';
import 4868Form from './Form';
import 4868Reducer from '../../store/slices/4868Slice';

const store = configureStore({
  reducer: {
    4868: 4868Reducer
  }
});

const meta: Meta<typeof 4868Interview> = {
  title: 'Forms/4868',
  component: 4868Interview,
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
      <4868Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <4868Form printMode={true} />
    </Provider>
  ),
};
