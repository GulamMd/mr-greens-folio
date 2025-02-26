const Footer = () => {
  return (
    <footer className="py-6 bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Gulam Mohammad. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

