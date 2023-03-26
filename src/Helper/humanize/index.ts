export const HumanizeChoices = {
    get: (
        choice: string,
    ): { title: string; description: string; value: string } => {
        switch (choice) {
            case "react":
                return {
                    title: "React",
                    description: "Creates a React CRA project",
                    value: choice,
                };
            case "nextjs":
                return {
                    title: "NextJS",
                    description: "Creates a Next.js project",
                    value: choice,
                };
            case "refine-react":
                return {
                    title: "refine(CRA)",
                    description:
                        "Creates a basic refine project (Recommended for CRUD applications)",
                    value: choice,
                };
            default:
                return {
                    title: choice,
                    description: "",
                    value: choice,
                };
        }
    },
};
