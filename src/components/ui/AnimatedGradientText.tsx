import { cn } from '@/lib/utils'

export default function AnimatedGradientText({
  text,
  className,
}: {
  text: string
  className?: HTMLElement['className']
}) {
  return (
    <span
      className={cn(
        'animate-text-gradient text-transparent inline-flex bg-gradient-to-r from-[#ACACAC] via-[#363636] to-[#ACACAC] bg-[200%_auto] bg-clip-text text-center text-3xl font-medium',
        className,
      )}
    >
      {text}
    </span>
  )
}
