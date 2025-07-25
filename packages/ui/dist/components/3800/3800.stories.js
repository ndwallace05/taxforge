import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
3800;
Interview;
from;
'./Interview';
3800;
Form;
from;
'./Form';
3800;
Reducer;
from;
'../../store/slices/3800Slice';
const store = configureStore({
    reducer: {
        3800: 3800, Reducer
    }
});
const meta;
3800;
Interview > ;
{
    title: 'Forms/3800',
        component;
    3800;
    Interview,
        decorators;
    [
        (Story) => (_jsx(Provider, { store: store, children: _jsx(Story, {}) })),
    ],
    ;
}
;
export default meta;
export const Interview = {
    args: {},
};
export const FormView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3800Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "3800Form printMode=", true, " />"] })),
};
