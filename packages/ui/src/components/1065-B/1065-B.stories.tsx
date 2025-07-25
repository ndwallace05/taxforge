import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1065-BInterview from './Interview';
import 1065-BForm from './Form';
import 1065-bReducer from '../../store/slices/1065-bSlice';

const store = configureStore({
  reducer: {
    1065-b: 1065-bReducer
  }
});

const meta: Meta<typeof 1065-BInterview> = {
  title: 'Forms/1065-B',
  component: 1065-BInterview,
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
      <1065-BForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1065-BForm printMode={true} />
    </Provider>
  ),
};
