export const HumanizeChoices = {
    get: (
        choice: string,
    ): { title: string; description: string; value: string } => {
        switch (choice) {
            case "material-ui":
                return {
                    title: "Material-UI",
                    description: "Creates a Material-UI project",
                    value: choice,
                };
            case "antd-ui":
                return {
                    title: "Ant Design",
                    description: "Creates a Ant Design project",
                    value: choice,
                };
            case "bootstrap-ui":
                return {
                    title: "Bootstrap",
                    description: "Creates a Bootstrap project",
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
