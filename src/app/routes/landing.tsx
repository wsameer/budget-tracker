import React from 'react'

import { Head } from '@/components/seo/head'
import { Button } from '@/components/ui/button'
import { Github, HomeIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const LandingRoute = () => {

  const navigate = useNavigate();

  const handleStart = () => navigate('/app');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Head description="Welcome to Budget Tracker by Sameer" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Budget Tracker
          </h1>
          <p className='mt-2'>Manage your daily expenses and keep track of your budget</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button onClick={handleStart}>
                <HomeIcon className="mr-2 h-4 w-4" /> Get started
              </Button>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="https://github.com/wsameer/budget-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                >
                  <Github className="mr-2 h-4 w-4" /> Github Repo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}