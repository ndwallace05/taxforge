import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
706;
Interview;
from;
'./Interview';
706;
Form;
from;
'./Form';
706;
Reducer;
from;
'../../store/slices/706Slice';
const store = configureStore({
    reducer: {
        706: 706, Reducer
    }
});
const meta;
706;
Interview > ;
{
    title: 'Forms/706',
        component;
    706;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "706Form printMode=", true, " />"] })),
};
