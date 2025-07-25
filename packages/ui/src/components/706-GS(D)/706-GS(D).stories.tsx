import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 706-GS(D)Interview from './Interview';
import 706-GS(D)Form from './Form';
import 706-gs(d)Reducer from '../../store/slices/706-gs(d)Slice';

const store = configureStore({
  reducer: {
    706-gs(d): 706-gs(d)Reducer
  }
});

const meta: Meta<typeof 706-GS(D)Interview> = {
  title: 'Forms/706-GS(D)',
  component: 706-GS(D)Interview,
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
      <706-GS(D)Form />
    </Provider>
  ),
};

export const PrintView: Story = {
  render: () => (
    <Provider store={store}>
      <706-GS(D)Form printMode={true} />
    </Provider>
  ),
};
