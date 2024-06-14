import { Container, Text, VStack } from "@chakra-ui/react";
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Protected = () => {
  const { session, loading } = useSupabaseAuth();

  if (loading) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Loading...</Text>
        </VStack>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">Access Denied</Text>
          <Text fontSize="xl">You must be logged in to view this content.</Text>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Protected Content</Text>
        <Text fontSize="xl">This content is only accessible to authenticated users.</Text>
      </VStack>
    </Container>
  );
};

export default Protected;