import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8882Interview from './Interview';
import 8882Form from './Form';
import 8882Reducer from '../../store/slices/8882Slice';

const store = configureStore({
  reducer: {
    8882: 8882Reducer
  }
});

const meta: Meta<typeof 8882Interview> = {
  title: 'Forms/8882',
  component: 8882Interview,
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
      <8882Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8882Form printMode={true} />
    </Provider>
  ),
};
