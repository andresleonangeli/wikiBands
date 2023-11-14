"use client";
import Link from 'next/link'
import Bands from '../app/components/bands';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(()=> {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      return
    } else {
      router.push("/login");
    }
  }, []);


  return (
    <main className="bg-gray-900 w-screen bg-cover p-0">
      <Link href='/'>
         HOME    </Link>
      <Bands></Bands>
    </main>
  )
}
