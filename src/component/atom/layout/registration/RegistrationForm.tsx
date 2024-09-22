import CardComponent from "../../card/CardComponent";
import ErrorMessage from "../../error/ErrorMessage";
import ButtonComponent from "../../button/ButtonComponent";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

// schema validation registraion using zod
const registerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  name: z.string().min(1),
  password: z
    .string()
    .min(8, "Must be at least 8 characters in length") // for min length 8
    .regex(new RegExp(".*[A-Z].*"), "Password must have uppercase character") // password  must have uppercas
    .regex(new RegExp(".*[a-z].*"), "Password must have lowercase character") // password must have lowercase
    .regex(new RegExp(".*\\d.*"), "Password must have number") // password must have number
    .regex(
      new RegExp(".*[`~<>?,./!@$#%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "Password must have special character"
    ), // regex for password validate that must have special character
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

const RegistrationForm = () => {
  // using react-hook-form with zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  // state
  const navigate = useNavigate();

  const onSubmit = (data: RegisterSchemaType) => {
    alert("You have success registration");
    console.log("data: ", data);
    navigate("/");
  };
  return (
    <div>
      <CardComponent>
        <div className="text-white">
          <h1 className="font-bold text-center text-3xl">Registration</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 mt-5"
          >
            <div>
              <label htmlFor="name">
                Nama<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className="bg-gray500 w-full rounded-lg p-2"
                {...register("name")}
              />
              <ErrorMessage message={errors.name?.message || ""} />
            </div>
            <div>
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className="bg-gray500 w-full rounded-lg p-2"
                {...register("email")}
              />
              <ErrorMessage message={errors.email?.message || ""} />
            </div>

            <div>
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                className="bg-gray500 w-full rounded-lg p-2"
                {...register("password")}
              />
              <ErrorMessage message={errors.password?.message || ""} />
            </div>
            <div className="flex items-center justify-end">
              <Link to="/" className="underline">
                back to home
              </Link>
            </div>
            <div className="mt-5 w-full">
              <ButtonComponent
                handleClick={handleSubmit(onSubmit)}
                disabled={!isDirty || !isValid}
              >
                Submit
              </ButtonComponent>
            </div>
          </form>
        </div>
      </CardComponent>
    </div>
  );
};

export default RegistrationForm;
