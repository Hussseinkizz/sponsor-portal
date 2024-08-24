import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NotfoundPage from "./pages/notfoundPage";
import { LoginScreen, SignupScreen } from "./pages/onboarding";
import About from "./pages/about";
import Reports from "./pages/reports";
import Letters from "./pages/letters";
import Photos from "./pages/photos";
import Account from "./pages/account";
import AllChildren from "./pages/children";
import Upload from "./pages/upload";
import AddChild from "./pages/add-child";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<SignupScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
      <Route path="/dashboard" element={<HomePage />}>
        <Route index element={<About />} />
        <Route path="add-child" element={<AddChild />} />
        <Route path="about" element={<About />} />
        <Route path="children" element={<AllChildren />} />
        <Route path="upload" element={<Upload />} />
        <Route path="account" element={<Account />} />
        <Route path="letters" element={<Letters />} />
        <Route path="photos" element={<Photos />} />
        <Route path="reports" element={<Reports />} />
      </Route>
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
}
