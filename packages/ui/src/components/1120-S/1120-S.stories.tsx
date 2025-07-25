import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-SInterview from './Interview';
import 1120-SForm from './Form';
import 1120-sReducer from '../../store/slices/1120-sSlice';

const store = configureStore({
  reducer: {
    1120-s: 1120-sReducer
  }
});

const meta: Meta<typeof 1120-SInterview> = {
  title: 'Forms/1120-S',
  component: 1120-SInterview,
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
      <1120-SForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-SForm printMode={true} />
    </Provider>
  ),
};
