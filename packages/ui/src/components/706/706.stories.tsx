import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706Interview from './Interview';
import 706Form from './Form';
import 706Reducer from '../../store/slices/706Slice';

const store = configureStore({
  reducer: {
    706: 706Reducer
  }
});

const meta: Meta<typeof 706Interview> = {
  title: 'Forms/706',
  component: 706Interview,
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
      <706Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706Form printMode={true} />
    </Provider>
  ),
};
