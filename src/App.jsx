import { AppProvider, useApp } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import MaintenanceDetail from './pages/MaintenanceDetail';
import RightShipCompliance from './pages/RightShipCompliance';

import ErrorBoundary from './components/ErrorBoundary';

function AppContent() {
  const { activePage } = useApp();

  let content;
  switch (activePage) {
    case 'login':
      return <Login />;
    case 'dash':
      content = <Dashboard />;
      break;
    case 'detail':
      content = <MaintenanceDetail />;
      break;
    case 'rs':
      content = <RightShipCompliance />;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <ErrorBoundary>
      <MainLayout>{content}</MainLayout>
    </ErrorBoundary>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
