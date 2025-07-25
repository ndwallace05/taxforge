import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-POLInterview from './Interview';
import 1120-POLForm from './Form';
import 1120-polReducer from '../../store/slices/1120-polSlice';

const store = configureStore({
  reducer: {
    1120-pol: 1120-polReducer
  }
});

const meta: Meta<typeof 1120-POLInterview> = {
  title: 'Forms/1120-POL',
  component: 1120-POLInterview,
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
      <1120-POLForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-POLForm printMode={true} />
    </Provider>
  ),
};
