"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { trpc } from "@/lib/trpc/client";
import Navbar from "@/components/navbar";
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cursor } from "@/components/cursor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReactMarkdown from "react-markdown";
import parse from "html-react-parser";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

const messageSchema = z.object({
  content: z.string().min(1, "Message cannot be empty").max(500, "Message is too long"),
});

type MessageFormData = z.infer<typeof messageSchema>;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const JourneyHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4 pt-24 pb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Column className="items-center gap-4">
        <motion.h2
          className="text-2xl font-light tracking-widest text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          My Journey
        </motion.h2>
      </Column>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Experience</span>
        <span className="hidden sm:flex">•</span>
        <span>Ask me anything!</span>
        <span className="hidden sm:flex">•</span>
        <span>Projects</span>
      </motion.div>
    </motion.div>
  );
};

const MessageContent = ({ content }: { content: string }) => {
  // Split content by newlines and process each paragraph
  const paragraphs = content.split("\n\n").map((paragraph, index) => {
    // Check if paragraph contains HTML tags
    const hasHtml = /<[^>]*>/g.test(paragraph);

    return (
      <div
        key={index}
        className={cn("prose prose-invert max-w-none", index > 0 && "mt-4")}
      >
        {hasHtml ? parse(paragraph) : <ReactMarkdown>{paragraph}</ReactMarkdown>}
      </div>
    );
  });

  return <>{paragraphs}</>;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
  });

  // Fetch welcome messages
  const { data: welcomeMessages } = trpc.chat.getWelcomeMessages.useQuery();

  // Load messages from localStorage on mount, or use welcome messages
  useEffect(() => {
    const stored = localStorage.getItem("chat-messages");
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
        return;
      } catch (e) {
        // fallback to welcome messages if parse fails
      }
    }
    if (welcomeMessages) {
      setMessages(welcomeMessages);
    }
  }, [welcomeMessages]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = trpc.chat.send.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, data]);
      setIsLoading(false);
      reset();
      setError(null);
    },
    onError: (error) => {
      console.error("[chat] Error sending message:", error);
      setIsLoading(false);
      setError(error.message);
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const onSubmit = (data: MessageFormData) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: data.content,
      role: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    sendMessage.mutate({ content: data.content });
  };

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      {!isMobile && (
        <>
          <FloatingTechGridScene />
          <Cursor />
        </>
      )}

      {!isMobile && <JourneyHeader />}

      <ScrollArea className="scrollbar-hide mx-auto flex h-full w-full max-w-7xl flex-1 flex-col">
        {isMobile && <JourneyHeader />}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center justify-center gap-8 px-4 py-4"
        >
          <motion.div
            variants={item}
            className="h-full w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-transparent shadow-xl backdrop-blur-md"
          >
            <ScrollArea ref={scrollRef} className="h-[500px] w-full max-w-3xl p-4">
              <Column className="gap-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={item}
                    className={cn(
                      "max-w-[80%] rounded-lg p-4",
                      message.role === "user"
                        ? "ml-auto bg-blue-500/20 text-white"
                        : "bg-white/5 text-gray-200",
                    )}
                  >
                    <MessageContent content={message.content} />

                    <p className="mt-1 text-xs text-gray-400">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    variants={item}
                    className="max-w-[80%] rounded-lg bg-white/5 p-4 text-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:0.2s]" />
                      <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:0.4s]" />
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    variants={item}
                    className="max-w-[80%] rounded-lg bg-red-500/20 p-4 text-red-200"
                  >
                    <p>{error}</p>
                  </motion.div>
                )}
              </Column>
            </ScrollArea>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-background border-t border-white/10 p-4 backdrop-blur-md"
            >
              <Row className="gap-2">
                <div className="flex-1">
                  <Input
                    {...register("content")}
                    placeholder="Type your message..."
                    className={cn(
                      "bg-white/5 text-white placeholder:text-gray-400",
                      errors.content && "border-red-500 focus-visible:ring-red-500",
                    )}
                    disabled={isLoading}
                  />
                  {errors.content && (
                    <p className="mt-1 text-xs text-red-500">{errors.content.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-blue-500 text-white hover:bg-blue-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </Row>
            </form>
          </motion.div>
        </motion.div>
      </ScrollArea>
    </main>
  );
}
