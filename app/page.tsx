import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css";
import {lusitana} from "@/app/ui/fonts";``
import { Button } from './ui/button';

export default function Page() {
  // const features list = [
  //   {
  //     icon:
  //   }
  // ]
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div >
    <header className='flex justify-between'>
      <div>
        <div><p>i</p></div>
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

    <div>
      <div>
        <h2 className='text-2xl font-bold'>
          Manage Your invoices Effortlessly
        </h2>
        <p className='text-sm'>Create, send and track invoices effortlessly. Get paid faster with automated reminders and professional templates</p>
      </div>
      <div className=''>

      </div>
    </div>
      </div>
    </main>
  );
}
