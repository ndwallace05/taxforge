import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 3468Interview from './Interview';
import 3468Form from './Form';
import 3468Reducer from '../../store/slices/3468Slice';

const store = configureStore({
  reducer: {
    3468: 3468Reducer
  }
});

const meta: Meta<typeof 3468Interview> = {
  title: 'Forms/3468',
  component: 3468Interview,
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
      <3468Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <3468Form printMode={true} />
    </Provider>
  ),
};
