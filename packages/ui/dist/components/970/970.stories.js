import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
970;
Interview;
from;
'./Interview';
970;
Form;
from;
'./Form';
970;
Reducer;
from;
'../../store/slices/970Slice';
const store = configureStore({
    reducer: {
        970: 970, Reducer
    }
});
const meta;
970;
Interview > ;
{
    title: 'Forms/970',
        component;
    970;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "970Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "970Form printMode=", true, " />"] })),
};
