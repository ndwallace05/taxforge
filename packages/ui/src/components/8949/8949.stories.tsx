import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8949Interview from './Interview';
import 8949Form from './Form';
import 8949Reducer from '../../store/slices/8949Slice';

const store = configureStore({
  reducer: {
    8949: 8949Reducer
  }
});

const meta: Meta<typeof 8949Interview> = {
  title: 'Forms/8949',
  component: 8949Interview,
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
      <8949Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8949Form printMode={true} />
    </Provider>
  ),
};
