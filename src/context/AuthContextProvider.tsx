import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import Profile from "../models/Profile";
import { checkProfile } from "../services/ProfilesService";
function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // useEffect to only register once at start
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        checkProfile(newUser.uid).then((array) => {
          if (array.length) {
            setProfile(array[0]);
            console.log(profile);
          } else {
            console.log("No user in database");
          }
        });
        // testing purposes
      } else {
        setProfile(null);
      }
    });
  }, [profile]);

  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;