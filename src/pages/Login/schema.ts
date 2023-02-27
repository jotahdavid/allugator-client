import { z } from 'zod';

export const accountSchema = z.object({
  tab: z.literal('signin'),
  email: z.string().email('Formato de e-mail inválido'),
  password: z.string().min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
}).or(
  z.object({
    tab: z.literal('signup'),
    name: z.string().min(1, 'Campo obrigatório'),
    email: z.string().email('Formato de e-mail inválido'),
    password: z.string().min(1, 'Campo obrigatório').min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
    confirmPassword: z.string().min(1, 'Campo obrigatório').min(4, 'Sua senha deve conter no mínimo 4 caracteres'),
  }).refine(
    (data) => data.password === data.confirmPassword,
    { message: 'As duas senhas não batem', path: ['confirmPassword'] },
  ),
);

export type Account = z.infer<typeof accountSchema>;
