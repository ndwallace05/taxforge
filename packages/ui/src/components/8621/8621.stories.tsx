import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8621Interview from './Interview';
import 8621Form from './Form';
import 8621Reducer from '../../store/slices/8621Slice';

const store = configureStore({
  reducer: {
    8621: 8621Reducer
  }
});

const meta: Meta<typeof 8621Interview> = {
  title: 'Forms/8621',
  component: 8621Interview,
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
      <8621Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8621Form printMode={true} />
    </Provider>
  ),
};
