import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css";
import {lusitana} from "@/app/ui/fonts";``

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div >
    <header className='flex justify-between'>
      <div>

        <p>Invoice Hub</p>
      </div>

    <div>
      <ul className='flex gap-2 items-center'>
        <li>Features</li>
        <li>Pricing</li>
        <li className='bg-blue-500 rounded p-2 text-white'><Link href="/login">Sign In</Link></li>

      </ul>
    </div>
    </header>
      </div>
    </main>
  );
}
