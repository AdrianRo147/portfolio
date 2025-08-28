import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input"
import { Link } from "@heroui/link";
import { addToast } from "@heroui/toast";
import { Linkedin, Mail } from "lucide-react";
import { type FormEvent} from "react";

export default function ContactUI() {
  //const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    //if (!submitted) return;

    e.preventDefault();

    //const data = Object.fromEntries(new FormData(e.currentTarget));
    
    addToast({
      title: 'Error',
      description: `Oops. Looks like form isn't configured yet. Try different way of contacting me`,
      timeout: 10000,
      shouldShowTimeoutProgress: true,
      color: 'danger',
      variant: 'flat',
      classNames: {
        base: 'dark',
      }
    });
  };

  return (
    <section id="contact">
      <div className="relative container mx-auto px-6 lg:px-12 pb-10 flex flex-col lg:flex-row items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-center lg:text-left">
            Contact
          </h1>

          <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 lg:gap-30 mt-5 items-center lg:items-start">
            <Form validationBehavior="aria" onSubmit={onSubmit} className="w-[90vw] lg:w-[30vw]">
              <Input
                isDisabled
                isRequired
                label="E-mail"
                labelPlacement="outside"
                name="email"
                placeholder="Enter you E-mail"
                type="email"
                /*validate={(value: string) => {
                  /*if (submitted && value.length === 0) {
                    return "E-mail is mandatory";
                  }
                  if (submitted && !value.match(new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'))) {
                    return "Invalid E-mail";
                  }
                }}*/
              />

              <Input
                isDisabled
                isRequired
                label="Subject"
                labelPlacement="outside"
                name="subject"
                placeholder="Enter subject"
                type="text"
                /*validate={(value: string) => {
                  if (submitted && value.length === 0) {
                    return "Subject is mandatory";
                  }
                }}*/
              />

              <Textarea
                isDisabled
                isRequired
                label="Message"
                labelPlacement="outside"
                name="message"
                placeholder="Enter your message"
                /*validate={(value: string) => {
                  if (submitted && value.length === 0) {
                    return "Message is mandatory";
                  }
                }}*/
              />

              <Button
                type="submit"
                variant="shadow"
                color="primary"
                className="mt-3 w-[90vw] lg:w-fit"
                /*onPress={() => setSubmitted(true)}*/
                isDisabled
              >
                Submit
              </Button>

              <h4 className="text-xl font-bold mt-5">Contact form isn't configured yet. Please use other ways of contacting me.</h4>
            </Form>

            <div className="flex flex-col flex-wrap items-center lg:items-start">
              <h4 className="text-2xl font-bold">Other ways of contacting me</h4>
              <div className="mt-6 flex flex-row flex-wrap gap-5">
                <Link showAnchorIcon href="https://www.linkedin.com/in/adrian-rovnan/"><Linkedin size={24} className="mr-3"/>LinkedIn</Link>
                <Link showAnchorIcon href="mailto:adrian.rovnan@gmail.com"><Mail className="mr-3" />adrian.rovnan@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
