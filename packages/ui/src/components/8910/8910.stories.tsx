import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8910Interview from './Interview';
import 8910Form from './Form';
import 8910Reducer from '../../store/slices/8910Slice';

const store = configureStore({
  reducer: {
    8910: 8910Reducer
  }
});

const meta: Meta<typeof 8910Interview> = {
  title: 'Forms/8910',
  component: 8910Interview,
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
      <8910Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8910Form printMode={true} />
    </Provider>
  ),
};
