import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 990-TInterview from './Interview';
import 990-TForm from './Form';
import 990-tReducer from '../../store/slices/990-tSlice';

const store = configureStore({
  reducer: {
    990-t: 990-tReducer
  }
});

const meta: Meta<typeof 990-TInterview> = {
  title: 'Forms/990-T',
  component: 990-TInterview,
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
      <990-TForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <990-TForm printMode={true} />
    </Provider>
  ),
};
