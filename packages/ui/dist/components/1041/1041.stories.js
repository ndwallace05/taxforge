import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1041;
Interview;
from;
'./Interview';
1041;
Form;
from;
'./Form';
1041;
Reducer;
from;
'../../store/slices/1041Slice';
const store = configureStore({
    reducer: {
        1041: 1041, Reducer
    }
});
const meta;
1041;
Interview > ;
{
    title: 'Forms/1041',
        component;
    1041;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041Form printMode=", true, " />"] })),
};
