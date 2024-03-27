import React from "react";
import ReactDOM from "react-dom";
import { AlertHandlerProvider } from "./contexts/alert_handler";
import { MainPage } from "./components/Pages/MainPage/index";
import { AlertManager } from "./components/Organisms/AlertManager";
import "./style.css";

ReactDOM.render(
    <AlertHandlerProvider>
        <MainPage />
        <AlertManager />
    </AlertHandlerProvider>
    , 
    document.getElementById("app")
);
