import { z } from 'zod';
import { userRoleFields } from '../../../constants/user';

const createOrUpdateUserZodSchema = z.object({
  body: z.object({
    username: z.string().optional(),
    fullName: z.string().optional(),
    email: z.string().email().optional(),
    password: z
      .string({
        required_error: 'Password is required!',
      })
      .refine(password => password.length >= 6, {
        message: 'Password should be at least 6 characters long.',
      })
      .refine(password => (password.match(/[a-z]/g) || []).length >= 3, {
        message: 'Password should contain at least 3 lowercase letters.',
      })
      .refine(password => (password.match(/[A-Z]/g) || []).length >= 1, {
        message: 'Password should contain at least 1 uppercase letter.',
      })
      .refine(password => (password.match(/[0-9]/g) || []).length >= 1, {
        message: 'Password should contain at least 1 numeric digit.',
      })
      .refine(password => (password.match(/[^a-zA-Z0-9]/g) || []).length >= 1, {
        message: 'Password should contain at least 1 symbol.',
      })
      .optional(),
    image: z.object({
      url: z
        .string()
        .url()
        .refine(
          value => {
            const extension = value.split('.').pop();
            return ['jpeg', 'jpg', 'gif', 'png', 'webp'].includes(
              extension as string
            );
          },
          {
            message: 'Invalid profile image url',
          }
        )
        .optional(),
      public_id: z.string(),
    }),
    role: z.enum([...userRoleFields] as [string, ...string[]]).optional(),
    address: z
      .object({
        fullName: z.string().optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        postalCode: z.string().optional(),
        country: z.string().optional(),
      })
      .optional(),
  }),
});

export const AuthUserValidation = {
  createOrUpdateUserZodSchema,
};