import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the product you're looking for.
          </p>
          <Link href="/menu">
            <Button size="lg">
              Back to Menu
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
