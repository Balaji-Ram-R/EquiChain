import { useUser, UserButton } from '@clerk/clerk-react';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div style={{ padding: '2rem' }}>
      <UserButton afterSignOutUrl="/sign-in" />
      <h1>Welcome, {user?.fullName || user?.username} 👋</h1>
      <p>Your email: {user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
