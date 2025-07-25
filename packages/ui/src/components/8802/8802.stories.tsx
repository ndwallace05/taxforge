import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8802Interview from './Interview';
import 8802Form from './Form';
import 8802Reducer from '../../store/slices/8802Slice';

const store = configureStore({
  reducer: {
    8802: 8802Reducer
  }
});

const meta: Meta<typeof 8802Interview> = {
  title: 'Forms/8802',
  component: 8802Interview,
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
      <8802Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8802Form printMode={true} />
    </Provider>
  ),
};
