import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 1098-TInterview from './Interview';
import 1098-TForm from './Form';
import 1098-tReducer from '../../store/slices/1098-tSlice';

const store = configureStore({
  reducer: {
    1098-t: 1098-tReducer
  }
});

const meta: Meta<typeof 1098-TInterview> = {
  title: 'Forms/1098-T',
  component: 1098-TInterview,
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
      <1098-TForm />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <1098-TForm printMode={true} />
    </Provider>
  ),
};
