import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
1041 - QFTInterview;
from;
'./Interview';
1041 - QFTForm;
from;
'./Form';
1041 - qftReducer;
from;
'../../store/slices/1041-qftSlice';
const store = configureStore({
    reducer: {
        1041: -qft, 1041: -qftReducer
    }
});
const meta;
1041 - QFTInterview > ;
{
    title: 'Forms/1041-QFT',
        component;
    1041 - QFTInterview,
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
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-QFTForm />"] })),
};
export const PrintView = {
    render: () => (_jsxs(Provider, { store: store, children: [_jsx(, {}), "1041-QFTForm printMode=", true, " />"] })),
};
