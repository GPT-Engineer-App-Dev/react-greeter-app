import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Protected from "./pages/Protected.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container, VStack, Text } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <VStack spacing={4}>
              <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
              {session ? (
                <Button onClick={logout}>Logout</Button>
              ) : (
                <Button as="a" href="/login">Login</Button>
              )}
            </VStack>
          </Container>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={
          <ProtectedRoute>
            <Protected />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;