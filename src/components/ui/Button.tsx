  import { Button as ButtonPrimitive } from "@base-ui/react/button"
  import { cva, type VariantProps } from "class-variance-authority"

  import { cn } from "@/lib/utils"

  const buttonVariants = cva(
    "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
      variants: {
        variant: {
          default:
            "bg-secondary text-white hover:bg-[#c5161d] shadow-md",

          primary:
            "bg-primary text-white hover:bg-[#041126] shadow-md",

          secondary:
            "bg-secondary text-white hover:bg-[#c5161d] shadow-md",

          outline:
            "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",

          ghost:
            "text-primary hover:bg-primary/10",

          destructive:
            "bg-red-600 text-white hover:bg-red-700",

          link:
            "text-secondary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-11 px-6 rounded-xl",

          sm: "h-9 px-4 rounded-lg",

          lg: "h-14 px-8 rounded-2xl text-base",

          icon: "size-11",

          "icon-sm": "size-9",

          "icon-lg": "size-14",

          xs: "h-8 px-3 rounded-md text-xs",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

  function Button({
    className,
    variant = "default",
    size = "default",
    ...props
  }: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
    return (
      <ButtonPrimitive
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }

  export { Button, buttonVariants }
