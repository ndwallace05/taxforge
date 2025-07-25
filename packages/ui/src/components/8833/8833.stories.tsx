import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8833Interview from './Interview';
import 8833Form from './Form';
import 8833Reducer from '../../store/slices/8833Slice';

const store = configureStore({
  reducer: {
    8833: 8833Reducer
  }
});

const meta: Meta<typeof 8833Interview> = {
  title: 'Forms/8833',
  component: 8833Interview,
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
      <8833Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8833Form printMode={true} />
    </Provider>
  ),
};
