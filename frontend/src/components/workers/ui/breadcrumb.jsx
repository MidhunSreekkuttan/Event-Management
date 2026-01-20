import { ChevronRight, MoreHorizontal } from "lucide-react";

const Breadcrumb = ({ children, className = "" }) => (
  <nav
    aria-label="breadcrumb"
    className={className}
  >
    {children}
  </nav>
);

const BreadcrumbList = ({ children, className = "" }) => (
  <ol
    className={`flex flex-wrap items-center gap-2 text-sm text-gray-500 ${className}`}
  >
    {children}
  </ol>
);

const BreadcrumbItem = ({ children, className = "" }) => (
  <li className={`inline-flex items-center gap-2 ${className}`}>
    {children}
  </li>
);

const BreadcrumbLink = ({ children, href = "#", className = "" }) => (
  <a
    href={href}
    className={`hover:text-black transition-colors ${className}`}
  >
    {children}
  </a>
);

const BreadcrumbPage = ({ children, className = "" }) => (
  <span
    aria-current="page"
    className={`text-black ${className}`}
  >
    {children}
  </span>
);

const BreadcrumbSeparator = ({ className = "" }) => (
  <li
    aria-hidden="true"
    className={`flex items-center ${className}`}
  >
    <ChevronRight className="h-4 w-4" />
  </li>
);

const BreadcrumbEllipsis = ({ className = "" }) => (
  <span
    aria-hidden="true"
    className={`flex h-8 w-8 items-center justify-center ${className}`}
  >
    <MoreHorizontal className="h-4 w-4" />
  </span>
);

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};