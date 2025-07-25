import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8822-BInterview from './Interview';
import 8822-BForm from './Form';
import 8822-bReducer from '../../store/slices/8822-bSlice';

const store = configureStore({
  reducer: {
    8822-b: 8822-bReducer
  }
});

const meta: Meta<typeof 8822-BInterview> = {
  title: 'Forms/8822-B',
  component: 8822-BInterview,
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
      <8822-BForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8822-BForm printMode={true} />
    </Provider>
  ),
};
