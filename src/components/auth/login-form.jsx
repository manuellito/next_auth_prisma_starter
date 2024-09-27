"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import CardWrapper from "@/components/card-wrapper";
import { LoginSchema } from "@/schemas/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
//import { login } from "@/actions/auth";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {  
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log("fire")
    login(values);
  };

  return (
    <CardWrapper
      title="Login"
      headerLabel="Please sign in"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocialLogin
    >
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="flex">
            <div className="space-y-4 w-full">
              <FormField
                  control={form.control}
                  name="email"
                  render={( {field}) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John.doe@gmail.com" type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
              />  
              <FormField
                  control={form.control}
                  name="password"
                  render={( {field}) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="********" type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                    
                  )}
              />       
              <FormError message="toto" />
              <Button
                type="submit"
                className="w-full"
              >
                Create an account
              </Button>         
            </div>
          </div>
        </form>
      </Form>  
    </CardWrapper>
  )
};

export default LoginForm;