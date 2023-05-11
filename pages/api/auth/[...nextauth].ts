import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = { 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    })
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);


//-- Generate key => openssl rand -base64 32
//-- ReDirtURL => //http://localhost:3000/api/auth/callback/google