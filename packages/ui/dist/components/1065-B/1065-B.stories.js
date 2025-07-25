import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1065 - BInterview;
from;
'./Interview';
1065 - BForm;
from;
'./Form';
1065 - bReducer;
from;
'../../store/slices/1065-bSlice';
const store = configureStore({
    reducer: {
        1065: -b, 1065: -bReducer
    }
});
const meta;
1065 - BInterview > ;
{
    title: 'Forms/1065-B',
        component;
    1065 - BInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1065-BForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1065-BForm printMode=", true, " />"] })),
};
