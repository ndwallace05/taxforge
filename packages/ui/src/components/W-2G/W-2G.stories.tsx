import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import W-2GInterview from './Interview';
import W-2GForm from './Form';
import w-2gReducer from '../../store/slices/w-2gSlice';

const store = configureStore({
  reducer: {
    w-2g: w-2gReducer
  }
});

const meta: Meta<typeof W-2GInterview> = {
  title: 'Forms/W-2G',
  component: W-2GInterview,
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
      <W-2GForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <W-2GForm printMode={true} />
    </Provider>
  ),
};
