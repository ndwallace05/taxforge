import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8812;
Interview;
from;
'./Interview';
8812;
Form;
from;
'./Form';
8812;
Reducer;
from;
'../../store/slices/8812Slice';
const store = configureStore({
    reducer: {
        8812: 8812, Reducer
    }
});
const meta;
8812;
Interview > ;
{
    title: 'Forms/8812',
        component;
    8812;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8812Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8812Form printMode=", true, " />"] })),
};
