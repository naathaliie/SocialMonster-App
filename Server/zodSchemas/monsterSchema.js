import {z} from 'zod';

export const monsterSchema = z.object({
    name: z.string(),
    age: z.number(),
    description: z.string(),
    horns: z.number(),
    legs: z.number(),
    color: z.string(),
    likes: z.array(z.string()), // Gör likes till en array av strings
    dislikes: z.array(z.string()), // Gör dislikes till en array av strings

});

