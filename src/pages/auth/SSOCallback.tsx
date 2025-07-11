
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { Spinner } from "@/components/ui/spinner";

export default function SSOCallback() {
  const { handleRedirectCallback } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    handleRedirectCallback({
      afterSignInUrl: "/dashboard",
      afterSignUpUrl: "/dashboard",
    })
      .then(() => {
        // Handled successfully
      })
      .catch((err) => {
        console.error("Error handling OAuth callback:", err);
        navigate("/sign-in");
      });
  }, [handleRedirectCallback, navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 dark:from-slate-900 dark:to-slate-800">
      <div className="mb-4">
        <Spinner className="h-12 w-12 text-sky-500" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
      <p className="text-muted-foreground">Please wait while we complete the authentication process.</p>
    </div>
  );
}
