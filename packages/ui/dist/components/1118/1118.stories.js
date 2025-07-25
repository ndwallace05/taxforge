import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1118;
Interview;
from;
'./Interview';
1118;
Form;
from;
'./Form';
1118;
Reducer;
from;
'../../store/slices/1118Slice';
const store = configureStore({
    reducer: {
        1118: 1118, Reducer
    }
});
const meta;
1118;
Interview > ;
{
    title: 'Forms/1118',
        component;
    1118;
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1118Form />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1118Form printMode=", true, " />"] })),
};
