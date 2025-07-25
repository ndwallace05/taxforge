import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8857Interview from './Interview';
import 8857Form from './Form';
import 8857Reducer from '../../store/slices/8857Slice';

const store = configureStore({
  reducer: {
    8857: 8857Reducer
  }
});

const meta: Meta<typeof 8857Interview> = {
  title: 'Forms/8857',
  component: 8857Interview,
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
      <8857Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8857Form printMode={true} />
    </Provider>
  ),
};
