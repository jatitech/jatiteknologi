import type { SvgComponent } from "astro/types";
import AdjustmentsIcon from "@tabler/icons/outline/adjustments.svg";
import BrainIcon from "@tabler/icons/outline/brain.svg";
import BriefcaseIcon from "@tabler/icons/outline/briefcase.svg";
import BulbIcon from "@tabler/icons/outline/bulb.svg";
import CalendarEventIcon from "@tabler/icons/outline/calendar-event.svg";
import CloudCheckIcon from "@tabler/icons/outline/cloud-check.svg";
import CodeIcon from "@tabler/icons/outline/code.svg";
import CpuIcon from "@tabler/icons/outline/cpu.svg";
import FingerprintIcon from "@tabler/icons/outline/fingerprint.svg";
import GavelIcon from "@tabler/icons/outline/gavel.svg";
import InfoCircleIcon from "@tabler/icons/outline/info-circle.svg";
import MailIcon from "@tabler/icons/outline/mail.svg";
import RocketIcon from "@tabler/icons/outline/rocket.svg";
import ServerIcon from "@tabler/icons/outline/server.svg";
import ShieldLockIcon from "@tabler/icons/outline/shield-lock.svg";
import ShoppingCartIcon from "@tabler/icons/outline/shopping-cart.svg";
import TargetIcon from "@tabler/icons/outline/target.svg";
import TopologyIcon from "@tabler/icons/outline/topology-complex.svg";
import TransformIcon from "@tabler/icons/outline/transform.svg";
import TrendingUpIcon from "@tabler/icons/outline/trending-up.svg";
import VectorBezierIcon from "@tabler/icons/outline/vector-bezier.svg";
import WindIcon from "@tabler/icons/outline/wind.svg";

type Navigation = {
  label: string;
  href: string;
  order: number;
  description?: string;
  icon?: SvgComponent & ImageMetadata;
  children?: {
    label: string;
    items: Omit<Navigation, "children">[];
  }[];
};

/**
 * @rule Minimum navigation menu 1 and maximum 6
 */
const NAVIGATION: ReadonlyArray<Navigation> = [
  {
    label: "Services",
    href: "/services",
    order: 1,
    children: [
      {
        label: "Services",
        items: [
          {
            label: "Edge-Native Architecture",
            href: "/services/edge-native-architecture",
            order: 1,
            description:
              "High-performance, low-latency global systems architected for the modern edge.",
            icon: TopologyIcon,
          },
          {
            label: "Custom Software Development",
            href: "/services/custom-software-development",
            order: 2,
            description:
              "Tailored performance-critical digital systems built with a product-first mindset.",
            icon: CodeIcon,
          },
          {
            label: "System Refactoring & Optimization",
            href: "/services/system-refactoring-optimization",
            order: 3,
            description:
              "Modernizing legacy logic into scalable, cost-efficient, and growth-ready architectures.",
            icon: AdjustmentsIcon,
          },
          {
            label: "AI Integration & Automation",
            href: "/services/ai-integration-automation",
            order: 4,
            description:
              "LLM integration, agentic AI workflows, and edge inference systems for intelligent applications.",
            icon: BrainIcon,
          },
          {
            label: "IoT Consulting & Design",
            href: "/services/iot-consulting-design",
            order: 5,
            description:
              "End-to-end IoT architecture and electronics integration for connected, intelligent systems.",
            icon: CpuIcon,
          },
          {
            label: "Information Security Consulting",
            href: "/services/information-security-consulting",
            order: 6,
            description:
              "Security architecture reviews, threat modeling, and compliance-ready system hardening.",
            icon: ShieldLockIcon,
          },
          {
            label: "Digital Identity Solutions",
            href: "/services/digital-identity-solutions",
            order: 7,
            description:
              "Scalable identity infrastructure — authentication, authorization, and digital trust systems.",
            icon: FingerprintIcon,
          },
          {
            label: "E-Commerce Development",
            href: "/services/ecommerce-development",
            order: 8,
            description:
              "High-performance e-commerce platforms engineered for scale, speed, and conversion.",
            icon: ShoppingCartIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    order: 2,
    children: [
      {
        label: "Solutions",
        items: [
          {
            label: "Scalable SaaS Foundation",
            href: "/solutions/scalable-saas-foundation",
            order: 1,
            description:
              "Strategic engineering and system design for tech startups and scaling companies.",
            icon: RocketIcon,
          },
          {
            label: "Enterprise Digital Transformation",
            href: "/solutions/enterprise-digital-transformation",
            order: 2,
            description:
              "Intelligent automation and unified infrastructure design for complex organizations.",
            icon: TransformIcon,
          },
          {
            label: "SME Growth Accelerator",
            href: "/solutions/sme-growth-accelerator",
            order: 3,
            description:
              "Productized launches providing edge-native digital foundations for growing SMEs.",
            icon: TrendingUpIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    order: 3,
    children: [
      {
        label: "Products",
        items: [
          {
            label: "Brand Wind",
            href: "/products/brand-wind",
            order: 1,
            icon: WindIcon,
          },
          {
            label: "Resume Vector",
            href: "/products/resume-vector",
            order: 2,
            icon: VectorBezierIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Cloud Care",
    href: "/cloud-care",
    order: 4,
    children: [
      {
        label: "Cloud Care",
        items: [
          {
            label: "Managed Operations",
            href: "/cloud-care/managed-operations",
            order: 1,
            description:
              "Proactive monitoring, security updates, and performance management for your assets.",
            icon: CloudCheckIcon,
          },
          {
            label: "Infrastructure Optimization",
            href: "/cloud-care/infrastructure-optimization",
            order: 2,
            description:
              "Ongoing architecture refinements, backup automation, and cloud cost reduction.",
            icon: ServerIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    order: 5,
    children: [
      {
        label: "Resources",
        items: [
          {
            label: "Insights",
            href: "/resources/insights",
            order: 1,
            description:
              "Technical roadmaps, architectural deep-dives, and engineering-led industry insights.",
            icon: BulbIcon,
          },
          {
            label: "Events",
            href: "/resources/events",
            order: 2,
            description:
              "Webinars, discovery sessions, and technical workshops for growth-minded leaders.",
            icon: CalendarEventIcon,
          },
          {
            label: "Projects",
            href: "/resources/projects",
            order: 3,
            description:
              "Case studies showcasing how we deliver scalable infrastructure and business value.",
            icon: BriefcaseIcon,
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    order: 6,
    children: [
      {
        label: "About",
        items: [
          {
            label: "About Us",
            href: "/about",
            order: 1,
            description:
              "An AI-native, edge-first engineering partner building scalable and intelligent digital systems.",
            icon: InfoCircleIcon,
          },
          {
            label: "Vision & Mission",
            href: "/vision-mission",
            order: 2,
            description:
              "Renewing infrastructure around the world through technical excellence.",
            icon: TargetIcon,
          },
        ],
      },
      {
        label: "Support",
        items: [
          {
            label: "Contact",
            href: "/contact",
            order: 1,
            description:
              "Schedule a discovery call to discuss your technical roadmap and scalability needs.",
            icon: MailIcon,
          },
          {
            label: "Legal",
            href: "/legal",
            order: 2,
            description:
              "Our commitment to data privacy, intellectual property, and regulatory compliance.",
            icon: GavelIcon,
          },
        ],
      },
    ],
  },
];

export const getNavigation = (): typeof NAVIGATION =>
  NAVIGATION.toSorted((a, b) => a.order - b.order).map((nav) => {
    if (!nav.children) return nav;
    const navCopy = Object.assign({}, nav);
    navCopy.children = nav.children.map((group) => {
      const groupCopy = Object.assign({}, group);
      groupCopy.items = group.items.toSorted((a, b) => a.order - b.order);
      return groupCopy;
    });
    return navCopy;
  });
