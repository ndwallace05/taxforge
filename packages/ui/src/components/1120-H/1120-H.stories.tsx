import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1120-HInterview from './Interview';
import 1120-HForm from './Form';
import 1120-hReducer from '../../store/slices/1120-hSlice';

const store = configureStore({
  reducer: {
    1120-h: 1120-hReducer
  }
});

const meta: Meta<typeof 1120-HInterview> = {
  title: 'Forms/1120-H',
  component: 1120-HInterview,
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
      <1120-HForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1120-HForm printMode={true} />
    </Provider>
  ),
};
