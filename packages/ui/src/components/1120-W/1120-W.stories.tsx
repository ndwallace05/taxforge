import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-WInterview from './Interview';
import 1120-WForm from './Form';
import 1120-wReducer from '../../store/slices/1120-wSlice';

const store = configureStore({
  reducer: {
    1120-w: 1120-wReducer
  }
});

const meta: Meta<typeof 1120-WInterview> = {
  title: 'Forms/1120-W',
  component: 1120-WInterview,
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
      <1120-WForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-WForm printMode={true} />
    </Provider>
  ),
};
