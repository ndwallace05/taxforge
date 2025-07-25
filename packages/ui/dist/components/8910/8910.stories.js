import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8910;
Interview;
from;
'./Interview';
8910;
Form;
from;
'./Form';
8910;
Reducer;
from;
'../../store/slices/8910Slice';
const store = configureStore({
    reducer: {
        8910: 8910, Reducer
    }
});
const meta;
8910;
Interview > ;
{
    title: 'Forms/8910',
        component;
    8910;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8910Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8910Form printMode=", true, " />"] })),
};
