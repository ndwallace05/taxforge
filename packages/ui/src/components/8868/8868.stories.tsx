import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8868Interview from './Interview';
import 8868Form from './Form';
import 8868Reducer from '../../store/slices/8868Slice';

const store = configureStore({
  reducer: {
    8868: 8868Reducer
  }
});

const meta: Meta<typeof 8868Interview> = {
  title: 'Forms/8868',
  component: 8868Interview,
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
      <8868Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8868Form printMode={true} />
    </Provider>
  ),
};
