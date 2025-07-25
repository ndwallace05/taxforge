import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 3520-AInterview from './Interview';
import 3520-AForm from './Form';
import 3520-aReducer from '../../store/slices/3520-aSlice';

const store = configureStore({
  reducer: {
    3520-a: 3520-aReducer
  }
});

const meta: Meta<typeof 3520-AInterview> = {
  title: 'Forms/3520-A',
  component: 3520-AInterview,
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
      <3520-AForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <3520-AForm printMode={true} />
    </Provider>
  ),
};
