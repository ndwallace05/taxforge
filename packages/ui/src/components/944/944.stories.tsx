import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 944Interview from './Interview';
import 944Form from './Form';
import 944Reducer from '../../store/slices/944Slice';

const store = configureStore({
  reducer: {
    944: 944Reducer
  }
});

const meta: Meta<typeof 944Interview> = {
  title: 'Forms/944',
  component: 944Interview,
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
      <944Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <944Form printMode={true} />
    </Provider>
  ),
};
