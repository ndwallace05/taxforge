import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8930Interview from './Interview';
import 8930Form from './Form';
import 8930Reducer from '../../store/slices/8930Slice';

const store = configureStore({
  reducer: {
    8930: 8930Reducer
  }
});

const meta: Meta<typeof 8930Interview> = {
  title: 'Forms/8930',
  component: 8930Interview,
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
      <8930Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8930Form printMode={true} />
    </Provider>
  ),
};
