import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 941-XInterview from './Interview';
import 941-XForm from './Form';
import 941-xReducer from '../../store/slices/941-xSlice';

const store = configureStore({
  reducer: {
    941-x: 941-xReducer
  }
});

const meta: Meta<typeof 941-XInterview> = {
  title: 'Forms/941-X',
  component: 941-XInterview,
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
      <941-XForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <941-XForm printMode={true} />
    </Provider>
  ),
};
