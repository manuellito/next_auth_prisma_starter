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
import { RegisterSchema } from "@/schemas/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
//import { register } from "@/actions/auth";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {  
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    console.log("values: ", values);
    register(values)
      .then((res) => {
        console.log("res: ", res);
      });
  };

  return (
    <CardWrapper
      title="Register"
      headerLabel="Please sign up"
      backButtonLabel="Already have an acount ?"
      backButtonHref="/login"
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
                  name="username"
                  render={( {field}) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="JohnDoe" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />   
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={( {field}) => (
                    <FormItem>
                      <FormLabel>Firstname</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> 
                <FormField
                  control={form.control}
                  name="lastname"
                  render={( {field}) => (
                    <FormItem>
                      <FormLabel>Lastname</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Doe" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />        
              </div>      
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                      <Input {...field} placeholder="Doe.doe@gmail.com" type="email" />
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={( {field}) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="********" type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />                   
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};


export default RegisterForm;