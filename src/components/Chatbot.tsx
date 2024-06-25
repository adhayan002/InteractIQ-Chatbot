'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useChat } from "ai/react";
import { CoolMode } from "./magicui/cool-mode";
import { useEffect, useRef } from "react";

export function Chatbot() {
  const {messages, input, handleInputChange, handleSubmit,isLoading} = useChat()

  return (
    <div className="h-[90%] bg-white z-20 w-full max-w-[700px] overflow-y-hidden overflow-x-hidden no-scrollbar">
      <div className="flex flex-col h-full max-h-[90%] gap-y-2">
    <div className="flex-grow rounded-lg border p-4 overflow-y-scroll no-scrollbar">
      {messages.map((message, index) => (
        <div key={index} className={`flex items-start space-x-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
          <div className={`rounded-lg px-5 py-3 mb-4 ${index % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'} max-w-[80%]`}>
            <p>{message.content}</p>
          </div>
          
        </div>
      ))}
      {isLoading && (
        <div className="mt-4 flex space-x-2 justify-start items-center bg-white">
          <span className="sr-only">Loading...</span>
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-4 w-4 bg-primary rounded-full animate-bounce"></div>
        </div>
      )}
        
    </div>
    
    <div className="flex flex-col p-2">
      <form className="flex-1 flex flex-row" onSubmit={handleSubmit}>
        <Input placeholder="Type your message here..." value={input} onChange={handleInputChange} />
        <div className="ml-2">
          <CoolMode>
            <Button type="submit" disabled={isLoading}>Send</Button>
          </CoolMode>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}