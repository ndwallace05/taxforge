import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8822Interview from './Interview';
import 8822Form from './Form';
import 8822Reducer from '../../store/slices/8822Slice';

const store = configureStore({
  reducer: {
    8822: 8822Reducer
  }
});

const meta: Meta<typeof 8822Interview> = {
  title: 'Forms/8822',
  component: 8822Interview,
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
      <8822Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8822Form printMode={true} />
    </Provider>
  ),
};
