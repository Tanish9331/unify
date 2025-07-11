
import React, { useState } from 'react';
import { useSignIn, useSignUp } from '@clerk/clerk-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email = '', isSignUp = false } = location.state || {};
  
  const { isLoaded: isSignInLoaded, signIn, setActive: setSignInActive } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp, setActive: setSignUpActive } = useSignUp();
  
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const verifyCode = async () => {
    if (code.length !== 6) {
      toast({
        title: "Invalid code",
        description: "Please enter a 6-digit verification code",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        // Handle sign up verification
        if (!isSignUpLoaded) return;
        
        const verification = await signUp.attemptEmailAddressVerification({
          code,
        });
        
        if (verification.status === "complete") {
          await setSignUpActive({ session: verification.createdSessionId });
          toast({
            title: "Account created",
            description: "Your account has been created successfully",
          });
          navigate("/dashboard");
        }
      } else {
        // Handle sign in verification
        if (!isSignInLoaded) return;
        
        const verification = await signIn.attemptFirstFactor({
          strategy: "email_code",
          code,
        });
        
        if (verification.status === "complete") {
          await setSignInActive({ session: verification.createdSessionId });
          toast({
            title: "Signed in",
            description: "You have been signed in successfully",
          });
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Error during verification:", error);
      toast({
        title: "Verification failed",
        description: "The code you entered is invalid or has expired",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = async () => {
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        if (!isSignUpLoaded) return;
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
      } else {
        if (!isSignInLoaded) return;
        // For sign in, we need to prepare the first factor again
        // The emailAddressId is not directly accessible in the verification resource
        // Instead we'll start a new sign-in process for the same email
        await signIn.create({
          identifier: email,
          strategy: "email_code",
        });
      }
      
      toast({
        title: "Code resent",
        description: "A new verification code has been sent to your email",
      });
    } catch (error) {
      console.error("Error resending code:", error);
      toast({
        title: "Failed to resend code",
        description: "There was an error sending a new code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md shadow-lg border-sky-100 dark:border-slate-700">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Verify your email</CardTitle>
          <CardDescription>
            We've sent a verification code to<br />
            <span className="font-medium">{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <InputOTP 
              value={code} 
              onChange={setCode}
              maxLength={6}
              className="gap-2"
              disabled={isLoading}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <Button 
            onClick={verifyCode} 
            className="w-full bg-sky-500 hover:bg-sky-600"
            disabled={code.length !== 6 || isLoading}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">
              Didn't receive a code?
            </p>
            <Button 
              variant="link" 
              onClick={resendCode}
              disabled={isLoading}
              className="text-sky-500 hover:text-sky-600"
            >
              Resend code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OtpVerification;
