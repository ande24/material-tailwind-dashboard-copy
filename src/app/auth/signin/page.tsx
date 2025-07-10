"use client";

import Signin from "@/app/components/Signin";

export default function SignIn() {
  return (
    <div className={`min-h-screen p-8`}>
      <section className="flex gap-4 h-screen">
        <Signin 
          signupLink="/auth/signup"
          forgotLink="/auth/signup"
          options={["google", "twitter"]}
          subscribe={true}
          terms={true}
          termsLink="/auth/signup"
        />
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/8710.jpg"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
      </section>
    </div>
  );
}
