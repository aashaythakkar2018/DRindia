"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: any;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = isMobile ? 110 : 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-[#1A3E5F] border-transparent";
      case "in-progress":
        return "text-white bg-[#C1440E] border-transparent";
      case "pending":
        return "text-slate-600 bg-slate-100 border-slate-200";
      default:
        return "text-slate-600 bg-slate-100 border-transparent";
    }
  };

  return (
    <div
      className="w-full h-[450px] md:h-[600px] lg:h-[650px] flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Orbital Center Gradient Pulse */}
          <div className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-18 h-18 md:w-20 md:h-20 rounded-full border border-slate-300 animate-ping opacity-70"></div>
            <div
              className="absolute w-22 h-22 md:w-24 md:h-24 rounded-full border border-slate-200 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          {/* Orbit Circle border line */}
          <div className="absolute w-[220px] h-[220px] md:w-[400px] md:h-[400px] rounded-full border border-slate-200"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Glow ring */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(26,62,95,0.08) 0%, rgba(26,62,95,0) 70%)`,
                    width: `${item.energy * 0.4 + 30}px`,
                    height: `${item.energy * 0.4 + 30}px`,
                    left: `-${(item.energy * 0.4 + 30 - 32) / 2}px`,
                    top: `-${(item.energy * 0.4 + 30 - 32) / 2}px`,
                  }}
                ></div>

                {/* Node circle */}
                <div
                  className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-[#C1440E] text-white"
                      : isRelated
                      ? "bg-[#1A3E5F]/20 text-[#1A3E5F]"
                      : "bg-[#1A3E5F] text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-[#C1440E] shadow-lg shadow-[#C1440E]/30"
                      : isRelated
                      ? "border-[#1A3E5F] animate-pulse"
                      : "border-white"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : ""}
                `}
                >
                  <Icon size={isMobile ? 12 : 16} />
                </div>

                {/* Node title */}
                <div
                  className={`
                  absolute top-10 md:top-12 whitespace-nowrap
                  text-[10px] md:text-xs font-semibold tracking-wider
                  transition-all duration-300 left-1/2 -translate-x-1/2
                  ${isExpanded ? "text-slate-900 scale-110 font-bold" : "text-slate-600"}
                `}
                >
                  {item.title}
                </div>

                {/* Expanded details card */}
                {isExpanded && (
                  <Card className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 w-56 md:w-64 bg-white border border-slate-200 shadow-xl overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-slate-300"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-[10px] md:text-xs ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] md:text-xs font-mono text-slate-400">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xs md:text-sm mt-2 text-slate-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] md:text-xs text-slate-600">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="flex justify-between items-center text-[10px] md:text-xs mb-1">
                          <span className="flex items-center text-slate-500">
                            <Zap size={10} className="mr-1 text-amber-500" />
                            Energy Level
                          </span>
                          <span className="font-mono text-slate-700">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-100">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-slate-400 mr-1" />
                            <h4 className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-5 px-1.5 py-0 text-[10px] rounded border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-slate-400"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
