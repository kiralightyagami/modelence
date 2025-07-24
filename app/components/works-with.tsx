"use client"
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";


export function CardDemo() {
  return (
    <Card className="max-w-9xl">
        <Skeleton />
    </Card>
  );
}

export function CardDemoLight() {
  return (
    <CardLight className="max-w-9xl">
        <SkeletonLight />
    </CardLight>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <img src="/icons/typescript.webp" alt="TypeScript" className="h-4 w-4" />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <img src="/icons/react.webp" alt="React" className="h-6 w-6" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <img src="/icons/nextjs.webp" alt="Next.js" className="h-6 w-6" />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <img src="/icons/mongodb.webp" alt="MongoDB" className="h-4 w-4" />
        </Container>
      </div>

      <div className="h-40 w-px absolute m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const SkeletonLight = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".light-circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".light-circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".light-circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".light-circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".light-circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        <ContainerLight className="h-8 w-8 light-circle-1">
          <img src="/icons/typescript.webp" alt="TypeScript" className="h-4 w-4" />
        </ContainerLight>
        <ContainerLight className="h-12 w-12 light-circle-2">
          <img src="/icons/react.webp" alt="React" className="h-6 w-6" />
        </ContainerLight>
        <ContainerLight className="light-circle-3">
          <OpenAILogo className="h-8 w-8 text-gray-700" />
        </ContainerLight>
        <ContainerLight className="h-12 w-12 light-circle-4">
          <img src="/icons/nextjs.webp" alt="Next.js" className="h-6 w-6" />
        </ContainerLight>
        <ContainerLight className="h-8 w-8 light-circle-5">
          <img src="/icons/mongodb.webp" alt="MongoDB" className="h-4 w-4" />
        </ContainerLight>
      </div>

      <div className="h-40 w-px absolute m-auto z-40 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <SparklesLight />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const [mounted, setMounted] = useState(false);
  const [sparkleData, setSparkleData] = useState<Array<{
    top: number;
    left: number;
    animateTop: number;
    animateLeft: number;
    topMove: number;
    leftMove: number;
    opacity: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateSparkleData = () => {
      return Array.from({ length: 12 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        animateTop: Math.random() * 100,
        animateLeft: Math.random() * 100,
        topMove: Math.random() * 2 - 1,
        leftMove: Math.random() * 2 - 1,
        opacity: Math.random(),
        duration: Math.random() * 2 + 4,
      }));
    };

    setSparkleData(generateSparkleData());
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={`star-${i}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "2px",
              height: "2px",
              borderRadius: "50%",
              zIndex: 1,
              opacity: 0,
            }}
            className="inline-block bg-black dark:bg-white"
          ></span>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {sparkleData.map((sparkle, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${sparkle.animateTop}% + ${sparkle.topMove}px)`,
            left: `calc(${sparkle.animateLeft}% + ${sparkle.leftMove}px)`,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const SparklesLight = () => {
  const [mounted, setMounted] = useState(false);
  const [sparkleData, setSparkleData] = useState<Array<{
    top: number;
    left: number;
    animateTop: number;
    animateLeft: number;
    topMove: number;
    leftMove: number;
    opacity: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateSparkleData = () => {
      return Array.from({ length: 12 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        animateTop: Math.random() * 100,
        animateLeft: Math.random() * 100,
        topMove: Math.random() * 2 - 1,
        leftMove: Math.random() * 2 - 1,
        opacity: Math.random(),
        duration: Math.random() * 2 + 4,
      }));
    };

    setSparkleData(generateSparkleData());
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <span
            key={`light-star-${i}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "2px",
              height: "2px",
              borderRadius: "50%",
              zIndex: 1,
              opacity: 0,
            }}
            className="inline-block bg-blue-400"
          ></span>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {sparkleData.map((sparkle, i) => (
        <motion.span
          key={`light-star-${i}`}
          animate={{
            top: `calc(${sparkle.animateTop}% + ${sparkle.topMove}px)`,
            left: `calc(${sparkle.animateLeft}% + ${sparkle.leftMove}px)`,
            opacity: sparkle.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-blue-400"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardLight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-gray-200 bg-neutral-100 shadow-[0px_2px_8px_0px_rgba(99,102,241,0.16)] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[5rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

const ContainerLight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100
    shadow-[0px_0px_12px_0px_rgba(99,102,241,0.25)_inset,0px_8px_16px_-8px_rgba(99,102,241,0.20)]
    border border-blue-200
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};


