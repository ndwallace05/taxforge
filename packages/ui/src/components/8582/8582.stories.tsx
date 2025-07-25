import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8582Interview from './Interview';
import 8582Form from './Form';
import 8582Reducer from '../../store/slices/8582Slice';

const store = configureStore({
  reducer: {
    8582: 8582Reducer
  }
});

const meta: Meta<typeof 8582Interview> = {
  title: 'Forms/8582',
  component: 8582Interview,
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
      <8582Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8582Form printMode={true} />
    </Provider>
  ),
};
