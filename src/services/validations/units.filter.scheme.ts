import { z } from "zod";

export const UnitsFilterScheme = z.object({
    unit: z.string().optional(),
    class: z.string().optional(),
    student: z.string().optional(),
});

export type UnitsFilterForm = z.infer<typeof UnitsFilterScheme>;
