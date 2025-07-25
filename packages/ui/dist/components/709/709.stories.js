import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
709;
Interview;
from;
'./Interview';
709;
Form;
from;
'./Form';
709;
Reducer;
from;
'../../store/slices/709Slice';
const store = configureStore({
    reducer: {
        709: 709, Reducer
    }
});
const meta;
709;
Interview > ;
{
    title: 'Forms/709',
        component;
    709;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "709Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "709Form printMode=", true, " />"] })),
};
