import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2441;
Interview;
from;
'./Interview';
2441;
Form;
from;
'./Form';
2441;
Reducer;
from;
'../../store/slices/2441Slice';
const store = configureStore({
    reducer: {
        2441: 2441, Reducer
    }
});
const meta;
2441;
Interview > ;
{
    title: 'Forms/2441',
        component;
    2441;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2441Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2441Form printMode=", true, " />"] })),
};
