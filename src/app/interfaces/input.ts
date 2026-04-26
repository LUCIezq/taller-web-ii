import { WritableSignal } from "@angular/core";

export interface inputType {
    type: string,
    id: string,
    placeholder: string,
    label: string,
    required?: boolean,
    model: WritableSignal<string | number>
}