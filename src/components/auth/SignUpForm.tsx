
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormFields, formSchema } from './FormFields';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface SignUpFormProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ isLoading, setIsLoading }) => {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!isLoaded) return;
    
    try {
      setIsLoading(true);
      
      // Start the sign-up process
      await signUp.create({
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.email,
      });
      
      // Send the verification email
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      
      navigate("/otp-verification", { 
        state: { 
          email: values.email,
          isSignUp: true 
        } 
      });
      
      toast({
        title: "Verification code sent",
        description: "Please check your email for the verification code",
      });
    } catch (error) {
      console.error("Error during sign up:", error);
      toast({
        title: "Sign up failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormFields form={form} isLoading={isLoading} />
        <Button 
          type="submit" 
          className="w-full bg-sky-500 hover:bg-sky-600"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>
    </Form>
  );
};
