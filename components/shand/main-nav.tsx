import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary text-yellow-50"
      >
        Overview
      </Link>
      <Link
        href="/dashboard/customer"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-yellow-50"
      >
        Customers
      </Link>
      <Link
        href="/dashboard/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-yellow-50"
      >
        Products
      </Link>
      <Link
        href="/dashboard/settings"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary text-yellow-50"
      >
        Settings
      </Link>
    </nav>
  )
}
