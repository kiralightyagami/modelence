"use client"
import { cn } from "../lib/utils";
import {
  IconTerminal2,
  IconBrandOpenai,
  IconRouteAltLeft,
  IconCpu,
  IconClock,
  IconAB,
  IconAdjustments,
  IconAlignBoxBottomCenter,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "LLM Integration",
      description:
        "Effortlessly connect to OpenAI, Anthropic, Google Gemini and other models with built-in API key management.",
      icon: <IconBrandOpenai />,
    },
    {
      title: "AI Observability",
      description:
        "Get instant visibility into every LLM and AI agent action with automatic tracing, error tracking, and real-time metrics.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Agentic Workflows",
      description:
        "Build persistent, stateful AI agents with built-in cron jobs, background workers, and a modular system for scheduling at scale.",
      icon: <IconCpu />,
    },
    {
      title: "Cron Jobs",
      description: "Simply define a handler function and it will run at your specified time interval, with sub-second precision and cron job orchestration for multiple application instances.",
      icon: <IconClock />,
    },
    {
      title: "Data Loading",
      description: "Define queries and mutations to send and retrieve data between the client and server. Use React hooks on the client to fetch data, handle errors and loading state with a single statement.",
      icon: <IconAB />,
    },
    {
      title: "Telemetryt",
      description:
        "All cron jobs and method calls are automatically logged and traced, so you can see full insights in your application's performance dashboard in Modelence Cloud.",
      icon: <IconAlignBoxBottomCenter />,
    },
    {
      title: "Type-Safe Development",
      description:
        "End-to-end TypeScript support with automatic type inference for your data models, methods and database queries.",
      icon: <IconTerminal2 />,
    },
    {
      title: "App Configuratione",
      description: "Define dynamic app configuration values, and call getConfig on both client & server to use your configuration values anywhere in your code.",
      icon: <IconAdjustments />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
