import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Fox from "../3DModels/fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/loader";

const Contact = () => {
  const formRef: any = useRef();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  console.log(
    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setCurrentAnimation("hit");
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formValue.name,
          to_name: "Kathir Mathavan",
          from_email: formValue.email,
          to_email: "kathirmthvn@gmail.com",
          message: formValue.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setCurrentAnimation("idle");
        setFormValue({
          name: "",
          email: "",
          message: "",
        });
        toast.success("Thank you for your message 😊");
      })
      .catch((err) => {
        setCurrentAnimation("idle");
        setLoading(false);
        toast.error("Oops! Something went wrong 😞");
        console.log(`Email sending error! ${err.text}`);
      });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full gap-7 flex flex-col mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={formValue.name}
              onChange={(e) =>
                setFormValue((prev) => ({ ...prev, name: e.target.value }))
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={formValue.email}
              onChange={(e) =>
                setFormValue((prev) => ({ ...prev, email: e.target.value }))
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Write your thoughts here..."
              required
              value={formValue.message}
              onChange={(e) =>
                setFormValue((prev) => ({ ...prev, message: e.target.value }))
              }
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button className="btn" disabled={loading} type="submit">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 100,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
