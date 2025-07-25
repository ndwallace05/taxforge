import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1099-OIDInterview from './Interview';
import 1099-OIDForm from './Form';
import 1099-oidReducer from '../../store/slices/1099-oidSlice';

const store = configureStore({
  reducer: {
    1099-oid: 1099-oidReducer
  }
});

const meta: Meta<typeof 1099-OIDInterview> = {
  title: 'Forms/1099-OID',
  component: 1099-OIDInterview,
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
      <1099-OIDForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1099-OIDForm printMode={true} />
    </Provider>
  ),
};
