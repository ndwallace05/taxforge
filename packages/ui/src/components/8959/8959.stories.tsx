import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8959Interview from './Interview';
import 8959Form from './Form';
import 8959Reducer from '../../store/slices/8959Slice';

const store = configureStore({
  reducer: {
    8959: 8959Reducer
  }
});

const meta: Meta<typeof 8959Interview> = {
  title: 'Forms/8959',
  component: 8959Interview,
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
      <8959Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8959Form printMode={true} />
    </Provider>
  ),
};
