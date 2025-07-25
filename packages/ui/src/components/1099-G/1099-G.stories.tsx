import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-GInterview from './Interview';
import 1099-GForm from './Form';
import 1099-gReducer from '../../store/slices/1099-gSlice';

const store = configureStore({
  reducer: {
    1099-g: 1099-gReducer
  }
});

const meta: Meta<typeof 1099-GInterview> = {
  title: 'Forms/1099-G',
  component: 1099-GInterview,
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
      <1099-GForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-GForm printMode={true} />
    </Provider>
  ),
};
