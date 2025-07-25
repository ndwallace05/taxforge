import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 8881Interview from './Interview';
import 8881Form from './Form';
import 8881Reducer from '../../store/slices/8881Slice';

const store = configureStore({
  reducer: {
    8881: 8881Reducer
  }
});

const meta: Meta<typeof 8881Interview> = {
  title: 'Forms/8881',
  component: 8881Interview,
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
      <8881Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <8881Form printMode={true} />
    </Provider>
  ),
};
