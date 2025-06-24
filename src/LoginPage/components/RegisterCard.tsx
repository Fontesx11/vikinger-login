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

const RegisterCard = () => {
  return (
    <Card className="w-full h-full p-16 font-raj">
      <CardHeader className="justify-center">
        <CardTitle className="font-raj text-2xl font-bold text-[#3e3f5e]">
          Create Your Account
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 mt-9">
        <form>
          <div className="flex flex-col gap-6">
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
              <Input
                id="username"
                type="text"
                placeholder="Username"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
            <div className="grid gap-6">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
              <Input
                id="password"
                type="password"
                placeholder="Repeat Password"
                className="px-[18px] py-0 h-[54px] rounded-[12px] placeholder:font-raj  placeholder:font-bold placeholder:text-[16px] placeholder:text-[#bfc1d6]"
                required
              />
              <div className=" flex justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms-controlled"
                    className="h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 dark:text-foreground"
                  />
                  <label
                    htmlFor="terms-controlled"
                    className="text-[#3e3f5e] text-[14px] font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send me news and updates via email
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-[54px] mt-6 text-[14px] font-bold bg-[#23d2e2] hover:bg-[#1bc5d4] cursor-pointer box-shadow-cyan"
              >
                Login to your Account!
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 px-0 mt-4">
      <p className="text-sm">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a className="text-[#23d2e2] font-bold">contact us</a>!</p>
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
