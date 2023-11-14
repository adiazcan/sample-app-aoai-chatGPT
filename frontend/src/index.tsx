import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { initializeIcons } from "@fluentui/react";

import "./index.css";

import Layout from "./pages/layout/Layout";
import NoPage from "./pages/NoPage";
import Chat from "./pages/chat/Chat";
import { AppStateProvider } from "./state/AppProvider";

import { Provider } from "react-redux";
import { store } from "./store";

initializeIcons();

export default function App() {
    return (
        <Provider store={store}>
            <AppStateProvider>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Chat />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </HashRouter>
            </AppStateProvider>
        </Provider>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
