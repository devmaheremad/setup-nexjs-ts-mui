import { LoginSchemaType } from "@/types";
import * as Yup from "yup";

export const LoginSchema: LoginSchemaType = Yup.object().shape({
	password: Yup.string().required("Password is required"),
});
