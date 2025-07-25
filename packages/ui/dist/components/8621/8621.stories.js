import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
8621;
Interview;
from;
'./Interview';
8621;
Form;
from;
'./Form';
8621;
Reducer;
from;
'../../store/slices/8621Slice';
const store = configureStore({
    reducer: {
        8621: 8621, Reducer
    }
});
const meta;
8621;
Interview > ;
{
    title: 'Forms/8621',
        component;
    8621;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8621Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "8621Form printMode=", true, " />"] })),
};
