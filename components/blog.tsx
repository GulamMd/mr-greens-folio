import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Frontend Development',
    excerpt: 'Exploring emerging trends and technologies shaping the future of web development.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'May 15, 2023',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Mastering Responsive Design',
    excerpt: 'Tips and tricks for creating truly responsive and adaptive web layouts.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'April 22, 2023',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Optimizing React Performance',
    excerpt: 'Strategies to boost your React application\'s performance and user experience.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'March 10, 2023',
    readTime: '6 min read'
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog

