import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './res/css/main.module.css';

import ScrollToTop from "utils/ScrollToTop";
import QuranApp from "./pages/homepage/QuranApp";
import Page404 from "./pages/404/Page404";
import SuspenseWithBase from "./components/suspense/SuspenseWithBase";

const SupportIndex = lazy(() => import("./pages/support/SupportIndex"));
const SupportPage = lazy(() => import("./pages/support/SupportPage"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy/PrivacyPolicy"));
const About = lazy(() => import("./pages/about/About"));
const Feedback = lazy(() => import("pages/feedback/Feedback"));

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<QuranApp />}></Route>
                <Route exact path="/help" element={<Navigate to="/support" />} />
                <Route exact path="/support">
                    <Route index element={<SuspenseWithBase component={SupportIndex} pageTitle="Support" />} />
                    <Route
                        path=":supportId"
                        element={<SuspenseWithBase component={SupportPage} pageTitle="Support" />} />
                    <Route
                        path="category/:category"
                        element={<SuspenseWithBase component={SupportIndex} pageTitle="Support" />} />
                </Route>
                <Route
                    exact
                    path="/privacy-policy"
                    element={<SuspenseWithBase component={PrivacyPolicy} pageTitle="Privacy Policy" />} />
                <Route exact path="/about" element={<SuspenseWithBase component={About} pageTitle="About" />} />
                <Route
                    exact
                    path="/feedback"
                    element={<SuspenseWithBase component={Feedback} pageTitle="Feedback" />} />
                <Route exact path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
