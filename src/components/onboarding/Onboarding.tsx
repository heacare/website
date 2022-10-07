import { ChakraProvider, Button } from "@chakra-ui/react";

function OnboardingApp() {
  return <Button colorScheme="blue">Next</Button>;
}

// TODO: For some reason, the Chakra styles are not ready on first run until the
// client-side JavaScript is loaded

export default function Onboarding() {
  return (
    <ChakraProvider>
      <OnboardingApp />
    </ChakraProvider>
  );
}
