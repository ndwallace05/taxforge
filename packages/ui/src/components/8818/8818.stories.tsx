import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8818Interview from './Interview';
import 8818Form from './Form';
import 8818Reducer from '../../store/slices/8818Slice';

const store = configureStore({
  reducer: {
    8818: 8818Reducer
  }
});

const meta: Meta<typeof 8818Interview> = {
  title: 'Forms/8818',
  component: 8818Interview,
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
      <8818Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8818Form printMode={true} />
    </Provider>
  ),
};
