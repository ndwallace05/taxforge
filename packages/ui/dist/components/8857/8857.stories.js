import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8857;
Interview;
from;
'./Interview';
8857;
Form;
from;
'./Form';
8857;
Reducer;
from;
'../../store/slices/8857Slice';
const store = configureStore({
    reducer: {
        8857: 8857, Reducer
    }
});
const meta;
8857;
Interview > ;
{
    title: 'Forms/8857',
        component;
    8857;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8857Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8857Form printMode=", true, " />"] })),
};
