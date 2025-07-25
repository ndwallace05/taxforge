import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5300Interview from './Interview';
import 5300Form from './Form';
import 5300Reducer from '../../store/slices/5300Slice';

const store = configureStore({
  reducer: {
    5300: 5300Reducer
  }
});

const meta: Meta<typeof 5300Interview> = {
  title: 'Forms/5300',
  component: 5300Interview,
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
      <5300Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5300Form printMode={true} />
    </Provider>
  ),
};
