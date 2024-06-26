/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/3nqbZ21LWNa
 */
import Link from "next/link";
import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faSquareJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export function HomeTest() {
  return (
    <div
      key="1"
      className="bg-black text-white min-h-screen p-8 mx-auto max-w-screen-lg"
    >
      <header className="flex justify-end space-x-6 mb-20">
        <Link className="text-lg font-medium hover:text-gray-300" href="#">
          Projects
        </Link>
        <Link className="text-lg font-medium hover:text-gray-300" href="#">
          Contact
        </Link>
        <Link className="text-lg font-medium hover:text-gray-300" href="#">
          Resume
        </Link>
      </header>
      <main>
        <section className="mb-40 mt-80 flex">
          <div>
            <h1 className="text-6xl font-bold mb-4 whitespace-pre-wrap">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-rose-500">
                {"Hello. I’m \nNamil."}
              </span>
            </h1>
            <p className="text-xl">Description</p>
          </div>
          <div>
            <h1>SVG here</h1>
          </div>
        </section>
        <section className="mb-40">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="flex flex-col space-y-4 gap-10">
            <Card className="bg-gray-950">
              <Image
                alt="Project screenshot"
                className="aspect-video object-cover rounded-lg"
                src="/images/color4dots.png"
                width={400}
                height={200}
              />
              <CardContent className="flex flex-col gap-2 p-5">
                <CardTitle className="text-white w-full">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-indigo-500">
                    Color 4 DOTS
                  </span>
                </CardTitle>
                <CardDescription>Color Recognition project</CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-white" variant="ghost">
                    Unity
                  </Badge>
                  <Badge className="text-white" variant="ghost">
                    Shader
                  </Badge>
                </div>
                <CardFooter className="flex w-full p-4 justify-start">
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    href="#"
                  >
                    <GithubIcon className="h-4 w-4 mr-3" />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    href="#"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
            <Card className="bg-gray-950">
              <Image
                alt="Project screenshot"
                className="aspect-video object-cover rounded-lg"
                src="/images/bread_board.jpeg"
                width={400}
                height={200}
              />
              <CardContent className="grid gap-2 p-5">
                <CardTitle className="text-white w-full">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-fuchsia-500">
                    METACIRCUITS
                  </span>
                </CardTitle>
                <CardDescription>Meta Circuit</CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-white" variant="ghost">
                    Unity
                  </Badge>
                  <Badge className="text-white" variant="ghost">
                    Shader
                  </Badge>
                </div>
                <CardFooter className="flex w-full p-4 justify-start">
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    href="#"
                  >
                    <GithubIcon className="h-4 w-4 mr-3" />
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    href="#"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[100px]">
                <FontAwesomeIcon
                  icon={faUnity}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="h-[20px]">
                <span className="text-lg font-medium">UNITY</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[100px]">
                <Image
                  src="/icons/brackets-coding-icon.svg"
                  alt="Shader Icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className="h-[20px]">
                <span className="text-lg font-medium">Shader</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[100px]">
                <Image
                  src="/icons/python-logo-only.png"
                  alt="Python Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[20px]">
                <span className="text-lg font-medium">Python</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-[100px]">
                <Image
                  src="/icons/Javascript-logo.png"
                  alt="JavaScript Logo"
                  width={100}
                  height={100}
                />
              </div>

              <div className="h-[20px]">
                <span className="text-lg font-medium">JavaScript</span>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="h-[100px]">
                <Image
                  src="/icons/react-logo.svg"
                  alt="React Logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="h-[20px]">
                <span className="text-lg font-medium">React</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Contact me</h2>
          <div className="space-y-8">
            <div className="space-y-2"></div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button>Send message</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}
