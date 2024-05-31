import { createContext } from "react";

export interface Case {
    name: string;
    case: string;
}

export const cases: Record<string, Case> = {
    firstcase: {
        name: "",
        case: "",
    },
    secondcase: {
        name: "",
        case: "",
    },
};

export const CaseContext = createContext<typeof cases>(cases);
