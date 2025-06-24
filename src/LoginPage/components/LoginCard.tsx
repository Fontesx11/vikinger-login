import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import TwitterLogo from "@/assets/icons/TwitterIcon";
import TwitchLogo from "@/assets/icons/TwitchIcon";
import YoutubeLogo from "@/assets/icons/YoutubeIcon";

const LoginCard = () => {
  return (
    <Card className="w-full h-full p-16 font-raj">
      <CardHeader className="justify-center">
        <CardTitle className="font-raj text-2xl font-bold text-[#3e3f5e]">
          Account Login
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 mt-9">
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Username or Email"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center"></div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
              <div className=" flex justify-between mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms-controlled"
                    className="h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 dark:text-foreground"
                  />
                  <label
                    htmlFor="terms-controlled"
                    className="text-[#3e3f5e] text-[14px] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember Me
                  </label>
                </div>

                <a
                  href="#"
                  className="ml-auto inline-block font-bold text-[14px] text-[#bfc1d6] underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full h-[54px] mt-6 text-[14px] font-bold bg-[#615dfa] hover:bg-[#5753e4] cursor-pointer box-shadow-purple"
              >
                Login to your Account!
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 px-0 mt-4">
        <div className="flex items-center w-full gap-3">
          <Separator className="flex-1" />
          <span className="text-sm font-bold text-[#3e3f5e]">Login with your Social Account</span>
          <Separator className="flex-1" />
        </div>
        <div className="flex gap-4 mt-5">
          <FacebookIcon
            className="text-white"
            options="hover:-translate-y-1 transition-transform ease-in-out duration-200"
          />
          <TwitterLogo
            className="text-white"
            options="hover:-translate-y-1 transition-transform ease-in-out duration-200"
          />
          <TwitchLogo
            className="text-white"
            options="hover:-translate-y-1 transition-transform ease-in-out duration-200"
          />
          <YoutubeLogo
            className="text-white"
            options="hover:-translate-y-1 transition-transform ease-in-out duration-200"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
