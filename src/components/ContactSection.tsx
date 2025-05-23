
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-vibeblue-950 to-vibeviolet-950 relative overflow-hidden" id="contact">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-vibeblue-600/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vibeviolet-600/20 rounded-full blur-[80px]"></div>
      
      {/* Background mesh pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzODlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNLTI5LjU5OSAxNy4zOThsMTYwLTkzLjYwMU0tMjEuNTk5IDI2LjE5OGwxNjAtOTMuNjAyTS0xMy41OTkgMzQuOTk4bDE2MC05My42MDJNLTUuNTk5IDQzLjc5OGwxNjAtOTMuNjAyTTIuNDAxIDUyLjU5OGwxNjAtOTMuNjAyTTEwLjQwMSA2MS4zOThsMTYwLTkzLjYwMk0xOC40MDEgNzAuMTk4bDE2MC05My42MDJNMjYuNDAxIDc4Ljk5OGwxNjAtOTMuNjAyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl mx-auto">
            Have questions? Our team is here to help.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card backdrop-blur-md bg-slate-900/40 p-8 rounded-2xl border border-slate-800/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                          <User className="h-4 w-4" /> Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="w-full p-3 border-slate-700 bg-slate-800/50 text-white light:bg-white/90 light:text-slate-900 light:border-slate-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                          <Mail className="h-4 w-4" /> Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your email"
                            className="w-full p-3 border-slate-700 bg-slate-800/50 text-white light:bg-white/90 light:text-slate-900 light:border-slate-300"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <MessageSquare className="h-4 w-4" /> Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          className="w-full p-3 border-slate-700 bg-slate-800/50 text-white light:bg-white/90 light:text-slate-900 light:border-slate-300"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
                        <MessageSquare className="h-4 w-4" /> Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what's on your mind..."
                          rows={5}
                          className="w-full p-3 border-slate-700 bg-slate-800/50 text-white light:bg-white/90 light:text-slate-900 light:border-slate-300 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 hover:from-vibeblue-600 hover:to-vibeviolet-600 text-white p-3 rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
