import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { Home } from 'lucide-react'

export const NotFoundRoute = () => {
  return (
    <div className="mt-52 flex flex-col items-center">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        404 - Not Found
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button variant="outline">
        <Link to="/app" className="flex items-center" replace>
          <Home className="mr-2 h-4 w-4" />
          Go to Home
        </Link>
      </Button>
    </div>
  )
}
