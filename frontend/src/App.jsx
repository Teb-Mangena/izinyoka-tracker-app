import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';


function App() {

  return (
    <>
      <div className="bg-red-500 flex justify-center">
        <p>Inzinyoka Tracker</p>
        
      </div>

      <SignedOut>
        <SignInButton mode='modal' />
        <SignUpButton mode='modal' />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

export default App
