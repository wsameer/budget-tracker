import { createBrowserRouter } from "react-router-dom";
import { AppRoot } from "./app/root";

export const createRouter = () => createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { LandingRoute } = await import('./landing');
      return { Component: LandingRoute }
    }
  },
  {
    path: '/app',
    element: <AppRoot />,
    children: [
      {
        path: 'transactions',
        lazy: async () => {
          const { TransactionsRoute } = await import('./app/transactions');
          return { Component: TransactionsRoute }
        }
      },
      {
        path: 'accounts',
        lazy: async () => {
          const { AccountsRoute } = await import('./app/accounts');
          return { Component: AccountsRoute }
        }
      },
      {
        path: 'stats',
        lazy: async () => {
          const { StatsRoute } = await import('./app/stats');
          return { Component: StatsRoute }
        }
      },
      {
        path: '',
        lazy: async () => {
          const { DashboardRoute } = await import('./app/dashboard');
          return { Component: DashboardRoute }
        }
      }
    ]
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFoundRoute } = await import('./not-found');
      return { Component: NotFoundRoute };
    },
  },
])