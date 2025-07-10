"use client";

import Signup from "@/app/components/Signup";

export default function SignUp() {
  return (
    <div className={`min-h-screen p-8`}>
      <section className="flex gap-4 h-screen">
        <div className="w-2/5 h-full hidden lg:block">
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_2t/8710.jpg"
            className="h-full w-full object-cover rounded-3xl"
          />
        </div>
        <Signup
          signinLink="/auth/signin"
          options={["google", "twitter"]}
          terms={true}
          termsLink="/auth/signin"
        />
      </section>
    </div>
  );
}
