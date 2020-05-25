import { useEffect } from 'react';
import { useAuth } from 'use-auth0-hooks';
import Header from "../components/Header";

export default function IndexPage() {
  const auth = useAuth()
  useEffect(() => {
    // @ts-ignore
    window.auth = auth;
  })
  console.log(auth)
  return <Header className="h-screen" />;
}
