import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 5307Interview from './Interview';
import 5307Form from './Form';
import 5307Reducer from '../../store/slices/5307Slice';

const store = configureStore({
  reducer: {
    5307: 5307Reducer
  }
});

const meta: Meta<typeof 5307Interview> = {
  title: 'Forms/5307',
  component: 5307Interview,
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
      <5307Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <5307Form printMode={true} />
    </Provider>
  ),
};
