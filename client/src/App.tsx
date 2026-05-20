import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileSetup from "./pages/ProfileSetup";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import PostDetail from "./pages/PostDetail";
import Explore from "./pages/Explore";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import CreateMemory from "./pages/CreateMemory";
import MemoryTimeline from "./pages/MemoryTimeline";
import FollowersList from "./pages/FollowersList";
import FollowingList from "./pages/FollowingList";
import MemoryDetail from "./pages/MemoryDetail";
import { useAuth } from "./_core/hooks/useAuth";
import { Spinner } from "./components/ui/spinner";

function ProtectedRoute({
  component: Component,
}: {
  component: React.ComponentType;
}) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    window.location.href = "/login";
    return null;
  }

  return <Component />;
}

function Router() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/" component={isAuthenticated ? Feed : Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile-setup" component={ProfileSetup} />
      <Route path="/feed" component={Feed} />
      <Route path="/profile/:userId" component={Profile} />
      <Route path="/post/:postId" component={PostDetail} />
      <Route path="/explore" component={Explore} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/settings" component={Settings} />
      <Route path="/create-memory" component={CreateMemory} />
      <Route path="/memories/:userId" component={MemoryTimeline} />
      <Route path="/profile/:userId/followers" component={FollowersList} />
      <Route path="/profile/:userId/following" component={FollowingList} />
      <Route path="/memory/:postId" component={MemoryDetail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
