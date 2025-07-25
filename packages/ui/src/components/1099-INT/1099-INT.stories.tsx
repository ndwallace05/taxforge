import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-INTInterview from './Interview';
import 1099-INTForm from './Form';
import 1099-intReducer from '../../store/slices/1099-intSlice';

const store = configureStore({
  reducer: {
    1099-int: 1099-intReducer
  }
});

const meta: Meta<typeof 1099-INTInterview> = {
  title: 'Forms/1099-INT',
  component: 1099-INTInterview,
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
      <1099-INTForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-INTForm printMode={true} />
    </Provider>
  ),
};
