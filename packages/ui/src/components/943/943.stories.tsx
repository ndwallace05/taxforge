import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 943Interview from './Interview';
import 943Form from './Form';
import 943Reducer from '../../store/slices/943Slice';

const store = configureStore({
  reducer: {
    943: 943Reducer
  }
});

const meta: Meta<typeof 943Interview> = {
  title: 'Forms/943',
  component: 943Interview,
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
      <943Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <943Form printMode={true} />
    </Provider>
  ),
};
