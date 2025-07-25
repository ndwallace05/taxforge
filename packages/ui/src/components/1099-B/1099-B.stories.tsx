import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-BInterview from './Interview';
import 1099-BForm from './Form';
import 1099-bReducer from '../../store/slices/1099-bSlice';

const store = configureStore({
  reducer: {
    1099-b: 1099-bReducer
  }
});

const meta: Meta<typeof 1099-BInterview> = {
  title: 'Forms/1099-B',
  component: 1099-BInterview,
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
      <1099-BForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-BForm printMode={true} />
    </Provider>
  ),
};
