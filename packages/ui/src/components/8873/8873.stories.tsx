import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8873Interview from './Interview';
import 8873Form from './Form';
import 8873Reducer from '../../store/slices/8873Slice';

const store = configureStore({
  reducer: {
    8873: 8873Reducer
  }
});

const meta: Meta<typeof 8873Interview> = {
  title: 'Forms/8873',
  component: 8873Interview,
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
      <8873Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8873Form printMode={true} />
    </Provider>
  ),
};
