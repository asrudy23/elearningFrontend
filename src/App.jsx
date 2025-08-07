import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StudentDashboardPage from "./pages/student/StudentDashboardPage";
import AllCoursesPage from "./pages/AllCoursesPage";
import CoursePlayerPage from "./pages/student/CoursePlayerPage";
import QuizPage from "./pages/student/QuizPage";
import StudentProfilePage from "./pages/student/StudentProfilePage";
import TeacherDashboardPage from "./pages/teacher/TeacherDashboardPage";
import ChatAssistantPage from "./pages/ChatAssistantPage";
import AiHistoryPage from "./pages/AiHistoryPage";
import QuizResultPage from "./pages/teacher/QuizResultPage";
import CourseStatsPage from "./pages/teacher/CourseStatsPage";
import CourseCreationPage from "./pages/teacher/CourseCreationPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import CourseManagePage from "./pages/admin/CourseManagePage";
import UsersPage from "./pages/admin/UsersPage";

function App() {
  return (
    <Routes> 
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboardStudent" element={<StudentDashboardPage />} />
      <Route path="/courses" element={<AllCoursesPage />} />
      <Route path="/course-play" element={<CoursePlayerPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/profile" element={<StudentProfilePage />} />
      <Route path="/dashboardTeacher" element={<TeacherDashboardPage/>} />
      <Route path="/ai" element={<ChatAssistantPage />} />
      <Route path="/chat-history" element={<AiHistoryPage />} />
      <Route path="/quiz-result" element={<QuizResultPage />} />
      <Route path="/courses/stats" element={<CourseStatsPage />} />
      <Route path="/course/create" element={<CourseCreationPage/>} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/courses/manage" element={<CourseManagePage />} />
      <Route path="/admin/users" element={<UsersPage/>} />

    </Routes>
  );
}

export default App;
