import { OnboardingProvider } from "@/lib/onboarding-context";
import WizardForm from "@/components/WizardForm";

export default function OnboardingPage() {
  return (
    <OnboardingProvider>
      <WizardForm />
    </OnboardingProvider>
  );
}