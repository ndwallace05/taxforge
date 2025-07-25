import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
2555;
Interview;
from;
'./Interview';
2555;
Form;
from;
'./Form';
2555;
Reducer;
from;
'../../store/slices/2555Slice';
const store = configureStore({
    reducer: {
        2555: 2555, Reducer
    }
});
const meta;
2555;
Interview > ;
{
    title: 'Forms/2555',
        component;
    2555;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2555Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "2555Form printMode=", true, " />"] })),
};
