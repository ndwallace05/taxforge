import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8833;
Interview;
from;
'./Interview';
8833;
Form;
from;
'./Form';
8833;
Reducer;
from;
'../../store/slices/8833Slice';
const store = configureStore({
    reducer: {
        8833: 8833, Reducer
    }
});
const meta;
8833;
Interview > ;
{
    title: 'Forms/8833',
        component;
    8833;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8833Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8833Form printMode=", true, " />"] })),
};
