import { personasMap } from "../db.js";

export function getPersona({ id }) {
    if (!personasMap[id]) {
        throw new Error("Persona not found.");
    }
    return personasMap[id];
}
