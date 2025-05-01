"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Briefcase, Clock, User, Bot } from "lucide-react"

interface Message {
  sender: "user" | "bot"
  text: string
}

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  const [userId] = useState(`user-${Math.random().toString(36).substring(2, 9)}`)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Hello! I'm your Interview Coach. I can help you prepare for job interviews, review common questions, or practice your responses. How can I assist you today?",
        },
      ])
    }
  }, [isOpen, messages.length])

  const sendMessage = async () => {
    if (input.trim() === "") return

    const userMessage = { sender: "user" as const, text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          userId: userId,
        }),
      })

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      setMessages((prev) => [...prev, { sender: "bot", text: data.response }])
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed inset-4 md:inset-auto md:bottom-24 md:right-6 md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[650px]"
            style={{
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3), 0 8px 10px -6px rgba(59, 130, 246, 0.2)",
            }}
          >
            <div className="flex flex-col h-full rounded-2xl bg-white overflow-hidden border border-blue-100">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-2xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">Interview Coach</h2>
                    <div className="text-xs text-blue-100 flex items-center gap-1">
                      <Clock size={12} />
                      <span>Available 24/7</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-blue-50 to-white">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * (index % 5) }}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-2 max-w-[85%]`}>
                      {msg.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={16} className="text-blue-600" />
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white rounded-tr-none shadow-sm"
                            : "bg-white border border-blue-100 text-gray-800 rounded-tl-none shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                      {msg.sender === "user" && (
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                          <User size={16} className="text-white" />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot size={16} className="text-blue-600" />
                      </div>
                      <div className="bg-white border border-blue-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                        <div className="flex space-x-2">
                          <motion.div
                            className="w-2.5 h-2.5 bg-blue-600 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="w-2.5 h-2.5 bg-blue-600 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 0.15,
                            }}
                          />
                          <motion.div
                            className="w-2.5 h-2.5 bg-blue-600 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: 0.3,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-blue-100 bg-white">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask about interview tips, questions, or practice..."
                    className="flex-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    onClick={sendMessage}
                    disabled={isLoading}
                    className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={20} />
                  </motion.button>
                </div>
                <div className="mt-2 text-xs text-center text-gray-400">Powered by Interview Coach AI</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:from-blue-700 hover:to-blue-600 transition-colors"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          rotate: isOpen ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 0.3,
            },
          }}
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.div>
      </motion.button>
    </div>
  )
}

export default ChatAssistant
