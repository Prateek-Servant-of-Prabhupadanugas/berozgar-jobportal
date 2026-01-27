import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

// New Components
import ServicePage from './components/ServicePage'
import { PrivacyPolicy, TermsConditions } from './components/LegalPages'
import AtsChecker from './components/AtsChecker'

// Data for Academy Routes
const serviceData = {
  tech: {
    title: "Digital & Tech Academy",
    subtitle: "Master the MERN stack and Digital Marketing strategies.",
    items: ["Digital Marketing", "SEO (Search engine optimisation)", "Revenue operation", "Microsoft office tools", "Python (All levels)"],
    color: "#7A1CAC"
  },
  healthcare: {
    title: "Healthcare & Safety",
    subtitle: "Life-saving certifications for medical professionals.",
    items: ["BLS", "ACLS", "PALS", "Bloodborne Pathogens", "First Aid"],
    color: "#AD49E1"
  },
  crm: {
    title: "CRM & Sales Mastery",
    subtitle: "Expertise in industry-leading sales tools.",
    items: ["C.R.M. analyse", "Salesforce", "Leadsquad", "Hubspot", "Sales Pitch and CX analyse"],
    color: "#2E073F"
  },
  services: {
    title: "Candidate Premium Services",
    subtitle: "End-to-end career support and documentation.",
    items: ["Background verification", "Scam job alert (free)", "NFC or QR card", "Resume building", "LinkedIn management", "Police clearance certificate", "End to end mentorship", "Cloud storage", "POSH Training"],
    color: "#EBD3F8"
  }
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  
  // --- New Academy & Tool Routes ---
  {
    path: "/ats-checker",
    element: <AtsChecker />
  },
  {
    path: "/academy/tech",
    element: <ServicePage {...serviceData.tech} />
  },
  {
    path: "/academy/healthcare",
    element: <ServicePage {...serviceData.healthcare} />
  },
  {
    path: "/academy/crm",
    element: <ServicePage {...serviceData.crm} />
  },
  {
    path: "/academy/services",
    element: <ServicePage {...serviceData.services} />
  },

  // --- Legal Routes ---
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms",
    element: <TermsConditions />
  },

  // admin ke liye yha se start hoga
  {
    path: "/admin/companies",
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },
  {
    path: "/admin/jobs",
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App