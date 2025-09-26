type CustomImageProps = {
  src: string
  alt: string
  className?: string
}

export default function CustomImage({ src, alt, className }: CustomImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  )
}