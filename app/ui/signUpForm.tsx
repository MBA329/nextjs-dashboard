"use client";

import {lusitana} from "@/app/ui/fonts";
import {Button} from './button'
import {useActionState} from 'react';
import Link from 'next/link';



export default function singUpForm(){

  return(
    <form action={formAction} className="space-y-3"></form>
  )
}
