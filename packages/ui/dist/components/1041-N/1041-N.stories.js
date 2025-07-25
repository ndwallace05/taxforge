import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1041 - NInterview;
from;
'./Interview';
1041 - NForm;
from;
'./Form';
1041 - nReducer;
from;
'../../store/slices/1041-nSlice';
const store = configureStore({
    reducer: {
        1041: -n, 1041: -nReducer
    }
});
const meta;
1041 - NInterview > ;
{
    title: 'Forms/1041-N',
        component;
    1041 - NInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-NForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-NForm printMode=", true, " />"] })),
};
